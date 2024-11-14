import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile", async (profileData, {rejectWithValue}) => {
    try {
      const response = await axios.patch("/api/user/updateprofile", profileData);
      // console.log("from the authSlice", response.data);
      return response.data;
    } catch (error){
      console.log(error)
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);
export const fetchUser = createAsyncThunk(
  "auth/fetchUser", async (userId, {rejectWithValue}) => {
    try {
      const response = await axios.get(`/api/user/fetchUser?userId=${userId}`);
      // console.log("from the authSlice", response.data);
      return response.data;
    } catch (error){
      console.log(error)
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const initialState = {
  user: null,
  userId: null,
  loading: false,
  error: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    setUserId(state, action) {
      state.userId = action.payload;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    //handle Signin
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message)
        state.user = action.payload;
        state.role = action.payload.role;
        state.error = null;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        toast.error(action.payload)
        state.error = action.payload;
      });

    //Handle signup async thunk
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
        state.user = action.payload;
        state.error = null
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
        
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
         toast.error(action.payload.details);
        state.error = action.payload;
      });

      //Handle update profile async thunk
      builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
        toast.success(action.payload.message)
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload); // Update error state
      });

      builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
        toast.success(action.payload.message)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload); // Update error state
      });

  },
});

export default authSlice;

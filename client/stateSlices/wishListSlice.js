import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const fetchwishList = createAsyncThunk(
    "wishListSlice/fetchwishList",
    async (userId, {rejectWithValue}) => {
       try {
        const response = await axios.get(`/api/wishlist/get?userId=${userId}`);
        return response.data;
       } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message)
       }
    }
);

export const addTowishList = createAsyncThunk(
    "wishListSlice/addTowishList", async ({userId, productId, quantity}, {rejectWithValue}) => {
        try {
            const response = await axios.post("/api/wishlist/post", {userId, productId, quantity});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message);
        }
    }
);

export const removeFromwishList = createAsyncThunk(
    "wishListSlice/removeFromwishList", async ({userId, productId}, {rejectWithValue}) => {
        try {
            const response = await axios.delete("/api/wishlist/delete", {data: {userId, productId}});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message);
        }
    }
);


const wishListSlice = createSlice({
     name: "wishList",
    initialState: {items:[],
        loading:false,
        error: null
    },
    reducers: {
        addToWishlist(state, action) {
          state.items.push(action.payload);
        },
        removeFromWishlist(state, action) {
          state.items = state.items.filter((item) => item.name !== action.payload);
        },
      },
    extraReducers: (builder) => {
        builder.addCase(fetchwishList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchwishList.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchwishList.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
        builder.addCase(addTowishList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addTowishList.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(addTowishList.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(state.error);

        });
        builder.addCase(removeFromwishList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(removeFromwishList.fulfilled, (state, action) => {
            state.loading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(removeFromwishList.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(state.error);

        });
        

    }

})

export default wishListSlice;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const fetchCart = createAsyncThunk(
  "cartSlice/fetchCart",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/cart/get?userId=${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cartSlice/addToCart",
  async ({ userId, productId, quantity }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/api/cart/post", {
        userId,
        productId,
        quantity,
      });
      dispatch(fetchCart(userId));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cartSlice/removeFromCart",
  async ({ userId, productId }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete("/api/cart/delete", {
        data: { userId, productId },
      });
      dispatch(fetchCart(userId));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const emptyCart = createAsyncThunk(
  "cartSlice/emptyCart",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete("/api/cart/delete", {
        data: { userId, empty: true },
      });
      dispatch(fetchCart(userId));
      toast.success("Cart emptied successfully", {toastId:"empty"});
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const incrementItemQuantity = createAsyncThunk(
  "cartSlice/incrementItemQuantity",
  async ({ userId, productId }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/api/cart/post", {
        userId,
        productId,
        increment: true,
      });
      dispatch(fetchCart(userId));
      toast.success("quantity plus one!", {toastId:"increment"});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const decrementItemQuantity = createAsyncThunk(
  "cartSlice/decrementItemQuantity",
  async ({ userId, productId }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete("/api/cart/delete", {
        data: { userId, decrement: true, productId },
      });
      dispatch(fetchCart(userId));
      toast.success("quantity minus one!",{ toastId:"decrement"});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.error = action.payload;
      toast.error(action.payload,{toastId:"fetchCart"});
      state.loading = false;
    });
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action.payload.message,{toastId:"addToCart"});
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload,{toastId:"addToCart"});
    });
    builder.addCase(removeFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action.payload.message, {toastId:"removeFromCart"});
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload, {toastId:"removeFromCart"});
    });

    builder
      .addCase(emptyCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(emptyCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(emptyCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("Failed to empty the cart", {toastId:"emptyCart"});
      });

    builder
      .addCase(incrementItemQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementItemQuantity.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(incrementItemQuantity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error(state.error,{toastId:"incrementItemQuantity"});
      });

    builder
      .addCase(decrementItemQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(decrementItemQuantity.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(decrementItemQuantity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error(state.error,{toastId:"decrementItemQuantity"});
      });
  },
});

export default cartSlice;

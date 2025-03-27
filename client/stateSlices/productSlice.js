import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shopcroche } from "../app/DradiantImages";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/bags/get", {
        headers: {
          "Cache-Control": "no-cache", // Prevent caching
          Pragma: "no-cache", // HTTP 1.0 cache-busting
          Expires: "0", // Expire immediately
        },
      });
      // console.log("from productSlice.js", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const emptyShop = createAsyncThunk(
  "cartSlice/emptyShop",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete("/api/bags/delete", {
        data: { empty: true },
      });
      dispatch(getProducts());
      toast.success("Product emptied successfully", { toastId: "empty" });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    recentShopItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    incrementItemQuantity(state, action) {
      state.recentShopItems = state.recentShopItems.map((item) =>
        item.name == action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementItemQuantity(state, action) {
      state.recentShopItems = state.recentShopItems.map((item) =>
        item.name == action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.recentShopItems = action.payload;
        state.error = null;
        // console.log(state.recentShopItems, state.loading, state.error);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log(state.recentShopItems, state.loading, state.error);
      });

    builder
      .addCase(emptyShop.pending, (state) => {
        state.loading = true;
      })
      .addCase(emptyShop.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(emptyShop.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("Failed to empty shop", { toastId: "emptyCart" });
      });
  },
});

export default productSlice;

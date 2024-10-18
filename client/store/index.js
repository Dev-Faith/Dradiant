import { createSlice, configureStore } from "@reduxjs/toolkit";
import productSlice from "../stateSlices/productSlice";
import cartSlice from "../stateSlices/cartSlice";
import authSlice from "../stateSlices/authSlice";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: { cursorVariant: "default" },
  reducers: {
    setCursorVariant(state, action) {
      state.cursorVariant = action.payload;
    },
  },
});

const searchSlice = createSlice({
  name: "search",
  initialState: { searchQuery: "" },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    addToWishlist(state, action) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

export const cursorActions = cursorSlice.actions;
export const searchActions = searchSlice.actions;
export const wishlistActions = wishlistSlice.actions;
export const productsActions = productSlice.actions;
export const cartActions = cartSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    cursor: cursorSlice.reducer,
    search: searchSlice.reducer,
    wishlist: wishlistSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

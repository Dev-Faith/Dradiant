import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shopcroche } from "../app/DradiantImages";
import axios from "axios";

// // const recentShopItems = [
//     {
//       name: "crochetbag",
//       price: "12,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "totebag",
//       price: "3,500",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "handbag",
//       price: "8,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//     {
//       name: "schoolbag",
//       price: "15,000",
//       desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
//       image:shopcroche,
//       quantity: 1
//     }, 
//   ];

  export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.get("/api/bags/get");
        return response.data;
      } catch (error) {
        return (rejectWithValue(error.response?.data?.error|| error.message));
      }
    }
  );


const productSlice = createSlice({
    name: "products",
  initialState: {
    recentShopItems: [],
    loading: false,
      error:null
    },
    reducers:{
       incrementItemQuantity(state, action){
           state.recentShopItems = state.recentShopItems.map(item=>item.name==action.payload ? {...item, quantity: item.quantity+1} : item)
        },
        decrementItemQuantity(state, action){
          state.recentShopItems = state.recentShopItems.map(item=>item.name==action.payload && item.quantity>1 ? {...item, quantity: item.quantity-1} : item)
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
    }
});


export default productSlice;
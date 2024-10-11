import {createSlice} from "@reduxjs/toolkit";
import {shopcroche} from "../app/DradiantImages"

const recentShopItems = [
    {
      name: "crochetbag",
      price: "12,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "totebag",
      price: "3,500",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "handbag",
      price: "8,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
  ];


const productSlice = createSlice({
    name: "products",
    initialState:{recentShopItems},
    reducers:{

    }
});
const productReducer = productSlice.reducer;
export default productReducer
import {createSlice} from "@reduxjs/toolkit";
import {shopcroche} from "../app/DradiantImages"

const recentShopItems = [
    {
      name: "crochetbag",
      price: "12,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "totebag",
      price: "3,500",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "handbag",
      price: "8,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
      quantity: 1
    }, 
  ];


const productSlice = createSlice({
    name: "products",
    initialState:{recentShopItems},
    reducers:{
       incrementItemQuantity(state, action){
           state.recentShopItems = state.recentShopItems.map(item=>item.name==action.payload ? {...item, quantity: item.quantity+1} : item)
        },
        decrementItemQuantity(state, action){
          state.recentShopItems = state.recentShopItems.map(item=>item.name==action.payload && item.quantity>1 ? {...item, quantity: item.quantity-1} : item)
        },
    }
});


export default productSlice;
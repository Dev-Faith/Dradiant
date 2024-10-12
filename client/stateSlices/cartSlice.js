import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name: "cart",
    initialState: {items:[]},
    reducers: {
        addToCart(state, action){
            state.items.push(action.payload)
        },
        removeFromCart(state, action){
           state.items = state.items.filter(item=>item.name!== action.payload)
        },
        incrementItemQuantity(state, action){
           state.items = state.items.map(item=>item.name==action.payload ? {...item, quantity: item.quantity+1} : item)
        },
        decrementItemQuantity(state, action){
          state.items = state.items.map(item=>item.name==action.payload && item.quantity>1 ? {...item, quantity: item.quantity-1} : item)
        },
        emptyCart(state, action) {
            state.items = []
        }
    }
})

export default cartSlice;
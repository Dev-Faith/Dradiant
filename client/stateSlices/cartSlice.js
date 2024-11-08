import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const fetchCart = createAsyncThunk(
    "cartSlice/fetchCart",
    async (userId, {rejectWithValue}) => {
       try {
        const response = await axios.get(`/api/cart/get?userId=${userId}`);
        return response.data;
       } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message)
       }
    }
);

export const addToCart = createAsyncThunk(
    "cartSlice/addToCart", async ({userId, productId, quantity}, {rejectWithValue}) => {
        try {
            const response = await axios.post("/api/cart/post", {userId, productId, quantity});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "cartSlice/removeFromCart", async ({userId, productId}, {rejectWithValue}) => {
        try {
            const response = await axios.delete("/api/cart/delete", {data: { userId, productId }});
            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response?.data?.error || error.message);
        }
    }
);

export const emptyCart = createAsyncThunk(
    "cartSlice/emptyCart", async (userId, {rejectWithValue}) => {
        try {
            const response = await axios.delete("/api/cart/delete", {data: { userId, productId }});
            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response?.data?.error || error.message);
        }
    }
)


const cartSlice = createSlice({
     name: "cart",
    initialState: {items:[],
        loading:false,
        error: null
    },
    reducers: {
        // addToCart(state, action){
        //     state.items.push(action.payload)
        // },
        // removeFromCart(state, action){
        //    state.items = state.items.filter(item=>item.name!== action.payload)
        // },
        incrementItemQuantity(state, action){
           state.items = state.items.map(item=>item.name==action.payload ? {...item, quantity: item.quantity+1} : item)
        },
        decrementItemQuantity(state, action){
          state.items = state.items.map(item=>item.name==action.payload && item.quantity>1 ? {...item, quantity: item.quantity-1} : item)
        },
        emptyCart(state, action) {
            state.items = []
        }
    },
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
            state.loading = false;
        });
        builder.addCase(addToCart.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload);
        });
        builder.addCase(removeFromCart.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(removeFromCart.fulfilled, (state, action) => {
            state.loading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(removeFromCart.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload);
        });


    }

})

export default cartSlice;
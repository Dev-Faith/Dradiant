import { createSlice, configureStore } from "@reduxjs/toolkit";


const cursorSlice = createSlice({
    name: "cursor",
    initialState: { cursorVariant: "default" },
    reducers: {
        setCursorVariant(state, action) {
            state.cursorVariant = action.payload
        }
    }
});

const searchSlice = createSlice({
    name: "search",
    initialState: {searchQuery: ""},
    reducers: {
        setSearchQuery(state, action){
            state.searchQuery = action.payload
        }
    }
})

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {items:[]},
    reducers: {
        addToWishlist(state, action){
            state.items.push(action.payload)
        },
        removeFromWishlist(state, action){
           state.items = state.items.filter(item=>item.name!== action.payload)
        },
    }
})

export const cursorActions = cursorSlice.actions;
export const searchActions = searchSlice.actions;
export const wishlistActions = wishlistSlice.actions;

export const store = configureStore({
    reducer: {cursor: cursorSlice.reducer, search:searchSlice.reducer, wishlist:wishlistSlice.reducer}
});
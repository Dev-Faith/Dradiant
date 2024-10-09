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

export const cursorActions = cursorSlice.actions;
export const searchActions = searchSlice.actions;
export const store = configureStore({
    reducer: {cursor: cursorSlice.reducer, search:searchSlice.reducer}
});
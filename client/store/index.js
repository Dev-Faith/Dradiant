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

export const cursorActions = cursorSlice.actions;
export const store = configureStore({
    reducer: {cursor: cursorSlice.reducer}
});
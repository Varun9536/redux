import { configureStore } from "@reduxjs/toolkit";
import { reactSlice } from "./slice";

export const store = configureStore({
    reducer : reactSlice.reducer
});
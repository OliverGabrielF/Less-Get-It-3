import { configureStore } from "@reduxjs/toolkit";
import { cinemasReducer } from "./src/reducers/cinemasSlice";

export const store = configureStore({
    reducer: {
        cinemas: cinemasReducer,
    },
});
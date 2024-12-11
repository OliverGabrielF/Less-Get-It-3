import { configureStore } from "@reduxjs/toolkit";
import { cinemasReducer } from "./src/reducers/cinemasSlice";
import { moviesReducer } from "./src/reducers/moviesSlice";
import { authenticationReducer } from "./src/reducers/authenticationSlice";

export const store = configureStore({
    reducer: {
        cinemas: cinemasReducer,
        movies: moviesReducer,
        authentication: authenticationReducer,
    },
});
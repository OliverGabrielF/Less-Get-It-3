import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cinemas: [],
    movies: [],
    token: null,
};

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            console.log("Attempting to set token value to: ", action.data);
        },
        setCinemas: (state, action) => {
            state.cinemas = action.payload;
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { setToken, setCinemas, setMovies } = cinemasSlice.actions

export const cinemasReducer = cinemasSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cinemas: [],
};

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {
        setCinemas: (state, action) => {
            state.cinemas = action.payload;
        },
    },
});

export const { setCinemas } = cinemasSlice.actions

export const cinemasReducer = cinemasSlice.reducer;
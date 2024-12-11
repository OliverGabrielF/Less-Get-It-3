import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    token: null,
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            console.log("Attempting to set token value to: ", action.payload);
        },
    },
});

export const { setToken } = authenticationSlice.actions

export const authenticationReducer = authenticationSlice.reducer;
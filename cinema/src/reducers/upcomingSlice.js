import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    upcoming: [],
};

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState,
    reducers: {
        setUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
    },
});

export const { setUpcoming } = upcomingSlice.actions

export const upcomingReducer = upcomingSlice.reducer;

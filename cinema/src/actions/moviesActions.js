import { setMovies } from "../reducers/cinemasSlice.js";
import axiosInstance from "../../axios.js";

export const fetchCinemas = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/movies/')
        dispatch(setMovies(response.data))
        console.log("Successfully got movies");
    } catch (error) {
        console.error("Error getting movies: ", error);
    }
};
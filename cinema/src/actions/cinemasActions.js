import { setCinemas } from "../reducers/cinemasSlice.js";
import axiosInstance from "../../axios.js";

export const fetchCinemas = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/theaters')
        dispatch(setCinemas(response.data))
        console.log("Successfully got cinemas");
    } catch (error) {
        console.error("Error getting cinemas: ", error);
    }
};
import { setUpcoming } from "../reducers/upcomingSlice.js";
import axiosInstance from "../../axios.js";

export const fetchUpcoming = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/upcoming/')
        dispatch(setUpcoming(response.data))
        console.log("Successfully got upcoming movies");
    } catch (error) {
        console.error("Error getting upcoming movies: ", error);
    }
};

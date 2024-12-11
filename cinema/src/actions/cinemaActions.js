import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import { setToken, setCinemas } from "../reducers/cinemasSlice.js";
import axiosInstance from "../../axios";

export const fetchCinemas = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/theaters')
        dispatch(setCinemas(response.data))
        console.log("Successfully got cinemas");
    } catch (error) {
        console.error("Error getting cinemas: ", error);
    }
};

export const checkAuthenticationStatus = (username, password) => async (dispatch) => {
    try {
        const savedToken = await AsyncStorage.getItem('access_token');

        if (savedToken){
            try{
                const response = await axiosInstance.get('/movies/');
                console.log("Already authenticated with token: ", savedToken);
                dispatch(setToken(savedToken));
                return;
            } catch (error) {
                console.log("Token appears expired, attempting reauthentication:", error);
            }
        }

        console.log("Attempting to authenticate...")
        await dispatch(authenticate(username, password));
    } catch (error) {
        console.error("Error checking authentication status:", error);
    }
};

export const authenticate = (username, password) => async (dispatch) => {
    try {
        const payload = base64.encode(`${username}:${password}`)
        const response = await axiosInstance.post('/authenticate', null, {
            headers: {
                Authorization: `Basic ${payload}`,
            },
        });

        const token = response.data.token;
        await AsyncStorage.setItem('access_token', token);
        dispatch(setToken(token));

        console.log('Authentication successful:', token);
    } catch (error) {
        console.error("Authentication failed", error);
    }
};
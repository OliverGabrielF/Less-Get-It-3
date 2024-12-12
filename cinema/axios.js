import axios from 'axios';

import { store } from "./store.js";

const axiosInstance = axios.create({
  baseURL: 'https://api.kvikmyndir.is',
  timeout: 1000,
});

axiosInstance.interceptors.request.use(function (config) {

    const state = store.getState();
    const token = state.authentication.token;
    console.log("Attempting to send a request with correct header: ", token);

    if (token) {
        config.headers['x-access-token'] = token;
    }
    return config;

}, function (error) {
    return Promise.reject(error);
});

export default axiosInstance;

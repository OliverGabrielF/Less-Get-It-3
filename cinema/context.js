import React, { createContext, useReducer, useContext } from 'react';
//import { encode } from 'react-native-base64'
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';


// HTTP communication stuff
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.kvikmyndir.is',
  timeout: 1000,
});

const Context = createContext();

const startingState = { 
    cinemas: [],
    movies: [],
    token: null,
 };

const reducer = (state, action) => {
  // Actions for contacts

  if (action.type === 'authenticate') {
    return {
        ...state, token: action.data,
    };
  }
  else if (action.type === 'get_cinemas') {
    return {
        ...state, cinemas: action.data,
    };
  }
  else if (action.type === 'get movies') {
    return {
        ...state, movies: action.data,
    }
  } else {
    return state;
  }
};

const checkAuthenticationStatus = async (username, password, dispatch) => {
    try {
        const savedToken = await AsyncStorage.getItem('access_token');

        if (savedToken){
            try{
                const response = await instance.get('/movies/');
                console.log("Already authenticated");
                return;
            } catch (error) {
                console.log("Token appears expired, attempting reauthentication:", error);
            }
        }

        console.log("Attempting to authenticate...")
        await authenticate(username, password, dispatch);
    } catch (error) {
        console.error("Error checking authentication status:", error);
    }
}

const authenticate = async (username, password, dispatch) => {
    try {
        const payload = base64.encode(`${username}:${password}`)
        const response = await instance.post('/authenticate', null, {
            headers: {
                Authorization: `Basic ${payload}`,
            },
        });

        const token = response.data.token;
        await AsyncStorage.setItem('access_token', token);
        dispatch({ type: 'authenticate', data: token });

        console.log('Authentication successful:', token);
    } catch (error) {
        console.error("Authentication failed", error);
    }
};

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, startingState);

    // This interceptor intercepts all outgoing requests and adds
    // the API access token to them

    return (
        <Context.Provider value={{ state, dispatch, authenticate, checkAuthenticationStatus }}>
            {children}
        </Context.Provider>
    );
};

export const useAppState = () => useContext(Context);
// context.js
import React, { createContext, useCallback, useEffect, useState } from 'react';

// Replace these credentials with your own from kvikmyndir.is registration
const API_USERNAME = "your_username";
const API_PASSWORD = "your_password";
const AUTH_URL = "http://api.kvikmyndir.is/authenticate";
const CINEMAS_URL = "http://api.kvikmyndir.is/theaters";
const MOVIES_URL = "http://api.kvikmyndir.is/movies";

// Create the Context
const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loadingToken, setLoadingToken] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a new token
  const login = useCallback(async () => {
    try {
      setLoadingToken(true);
      setError(null);

      // Basic Auth header value: "Basic base64encoded(username:password)"
      const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);

      const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate with the kvikmyndir API");
      }

      const data = await response.json();
      setToken(data.token);
      setLoadingToken(false);
    } catch (err) {
      setError(err.message);
      setLoadingToken(false);
      setToken(null);
    }
  }, []);

  useEffect(() => {
    // Attempt to get a token on mount
    login();
  }, [login]);

  // Generic function to perform authenticated GET requests
  const fetchWithToken = useCallback(
    async (url) => {
      if (!token) {
        throw new Error("No token available. Cannot fetch data.");
      }

      const response = await fetch(url, {
        headers: {
          'x-access-token': token
        }
      });

      // If token is expired or invalid, handle logic here
      if (response.status === 401) {
        // Token might be expired, re-authenticate
        await login();
        // After re-auth, retry the request once
        const retryResponse = await fetch(url, {
          headers: {
            'x-access-token': token
          }
        });
        return retryResponse.json();
      }

      if (!response.ok) {
        throw new Error(`Request to ${url} failed with status ${response.status}`);
      }

      return response.json();
    },
    [token, login]
  );

  // Example: Fetch cinemas (alphabetically sorted can be done after fetch)
  const fetchCinemas = useCallback(async () => {
    const cinemas = await fetchWithToken(CINEMAS_URL);
    // Sort alphabetically by name before returning
    cinemas.sort((a, b) => a.name.localeCompare(b.name));
    return cinemas;
  }, [fetchWithToken]);

  // Example: Fetch currently playing movies
  const fetchMovies = useCallback(async () => {
    const movies = await fetchWithToken(MOVIES_URL);
    // You can further process movies here if needed
    return movies;
  }, [fetchWithToken]);

  // Add more functions for cinema details, movie details, upcoming movies, etc.
  // For example:
  const fetchCinemaDetails = useCallback(async (cinemaId) => {
    // This is hypothetical; adapt the URL based on API docs
    const url = `${CINEMAS_URL}/${cinemaId}`;
    return await fetchWithToken(url);
  }, [fetchWithToken]);

  const fetchMovieDetails = useCallback(async (movieId) => {
    // Hypothetical endpoint; adapt as needed
    const url = `${MOVIES_URL}/${movieId}`;
    return await fetchWithToken(url);
  }, [fetchWithToken]);

  return (
    <AppContext.Provider
      value={{
        token,
        loadingToken,
        error,
        login,
        fetchCinemas,
        fetchMovies,
        fetchCinemaDetails,
        fetchMovieDetails
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Export the context for use in components
export default AppContext;

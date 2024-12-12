import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies } from '../actions/moviesActions.js';
import { fetchUpcoming } from '../actions/upcomingActions.js';
import styles from '../styles/movie_screen_style.js';

export default function MovieScreen({ navigation, route }) {

  const { movieId } = route.params;

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { upcoming } = useSelector((state) => state.upcoming)

  let movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    movie = upcoming.find((m) => m.id === movieId);
  }

  const { token } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (token) {
      dispatch(fetchMovies());
      dispatch(fetchUpcoming())
    }
  }, [token, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back_home} onPress={() => navigation.goBack("Home")}>
          <Text style={styles.buttonTxt}>{"< BACK"}</Text>
        </TouchableOpacity>
        <Text style={styles.header_text}>Dr. Cinema</Text>
      </View>

      <View style={styles.movie_info_container}>
        <Text>{movie.title}</Text>
      </View>

    </View>
  );
}


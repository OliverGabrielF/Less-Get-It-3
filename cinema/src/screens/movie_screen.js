import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies } from '../actions/moviesActions.js';
import styles from '../styles/movie_screen_style.js';

import Header from '../components/header.js';

export default function MovieScreen({ navigation, route }) {

  const { cinemaId, movieId } = route.params;

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const movie = movies.find((m) => m.id === movieId);
  const schedules = movie.showtimes.find((showtime) => showtime.cinema.id === cinemaId).schedule;
  if(!schedules) {
    schedules = [];
  }

  const { token } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (token) {
      dispatch(fetchMovies());
    }
  }, [token, dispatch]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <View style={styles.background_container}>
        <View style={styles.flex_row_container}>
          <View style={styles.poster_container}>
            <Image source={{ uri: movie.poster }} style={styles.poster} />
          </View>
          <View style={styles.movie_details_container}>
            <Text style={styles.movie_name}>{movie.title}</Text>

            <View style={styles.detail_duration_row}>
              <Text style={styles.detail_duration_title}>Lengd: </Text>
              <Text style={styles.detail_duration_info}>{movie.durationMinutes} min.</Text>
            </View>
            
            <View style={styles.detail_year_row}>
              <Text style={styles.detail_year_title}>Frumsýnd: </Text>
              <Text style={styles.detail_year_info}>{movie.year}</Text>
            </View>

            <View style={styles.genre_container}>
              <Text style={styles.genre_title}>Tegund: </Text>
              {movie.genres.map((genre, index) => (
                <Text key={genre.ID} style={styles.genre_text}>
                {genre.Name}
                {index < movie.genres.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.description_container}>
          <Text style={styles.description_title}>Lýsing: </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed interdum faucibus tincidunt. Nunc congue eros eget accumsan hendrerit. 
          Integer aliquam eros elit, a laoreet dolor tincidunt nec. 
          Phasellus cursus neque eu aliquam tincidunt. </Text>
        </View>


        <Text style={styles.showtime_title}>Sýningartímar: </Text>
        <View style={styles.showtime_container}>
              {schedules.map((schedule) => (
                <TouchableOpacity 
                  key={schedule.time}
                  style={styles.purchase_button} 
                  onPress={() => Linking.openURL(schedule.purchase_url)}>
                  <Text>{schedule.time}</Text>
                </TouchableOpacity>
              ))}
        </View>
      </View>
    </View>
  );
}
import React, { useEffect } from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCinemas } from '../actions/cinemasActions.js';
import { fetchMovies } from '../actions/moviesActions.js';
import Header from '../components/header.js';
import Movie from '../components/movie.js';
import styles from '../styles/cinema_detail_style.js';

export default function CinemaDetailScreen({ navigation, route }) {

  const { cinemaId } = route.params;
  const dispatch = useDispatch();
  const { cinemas } = useSelector((state) => state.cinemas);
  const { movies } = useSelector((state) => state.movies);
  const { token } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (token) {
      dispatch(fetchCinemas());
      dispatch(fetchMovies());
    }
  }, [token, dispatch]);

  const cinema = cinemas.find((c) => c.id === cinemaId);

  // Array of all movies which are shown in a specific cinema
  const movies_for_cinema = movies.filter(movie =>
    movie.showtimes &&
    movie.showtimes.some(showtime => showtime.cinema.id === cinemaId)
  );

  // Function to strip the description of HTML tags in description of the API
  function stripHtmlTags(text) {
    if (!text) return '*No description found';
    return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView style={styles.scrollview}>
        <View style={styles.scrollview_container}>
          <View style={styles.contact_info_container}>
            <View style={styles.contact_text_container}>
              <Text style={styles.contact_text_name}>{cinema.name}</Text>
              <Text style={styles.contact_text}>
                {stripHtmlTags(cinema.description)
                  .split('\n')
                  .map((line, index) => (
                    <Text key={index} style={styles.contact_text}>
                      {line.trim()}
                      {index < stripHtmlTags(cinema.description).split('\n').length - 1 && '\n'}
                    </Text>
                  ))}
              </Text>
              <Text style={styles.contact_text}>{cinema["address\t"]}, {cinema.city}</Text>
              <Text style={styles.contact_text}>{cinema.phone}</Text>
              <Text onPress={() => {
                let url = cinema.website.startsWith('http')
                  ? cinema.website
                  : `https://${cinema.website}`;
                Linking.openURL(url).catch((err) =>
                  console.error("Failed to open URL:", err)
                );
              }}>{cinema.website}</Text>
            </View>
          </View>
          <Text style={styles.movies_shown_text}>Movies shown in {cinema.name}</Text>

          {movies_for_cinema.length > 0 && (

            <ScrollView horizontal style={styles.horizontal_scrollview}>
              <View style={styles.movies_shown_container}>
                {movies_for_cinema.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    name={movie.title}
                    thumbnail={movie.poster}
                    releaseDate={movie.year}
                    genres={movie.genres}
                    description={movie.description}
                    navigation={navigation}
                    cinemaId={cinemaId}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

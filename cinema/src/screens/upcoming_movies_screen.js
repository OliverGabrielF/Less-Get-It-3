import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcoming } from '../actions/upcomingActions.js';
import styles from '../styles/upcoming_movies_style.js'; // Style imported from the style sheet

export default function UpcomingMoviesScreen({ navigation }) {
  const dispatch = useDispatch();
  const { upcoming } = useSelector((state) => state.upcoming);
  const { token } = useSelector((state) => state.authentication);

  // Fetch upcoming movies when the component is loaded
  useEffect(() => {
    if (token) {
      dispatch(fetchUpcoming());
    }
  }, [token, dispatch]);

  // Sort upcoming movies by release date in ascending order
  const sortedMovies = upcoming.slice().sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));

  // Render a single movie item
  const renderMovie = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.movieName}>{item.name}</Text>
        <Text style={styles.releaseDate}>Release Date: {item.releaseDate}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{"< BACK"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Upcoming Movies</Text>
      </View>
      <FlatList
        data={sortedMovies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

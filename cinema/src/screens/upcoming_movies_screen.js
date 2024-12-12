import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Upcoming from '../components/upcoming.js';
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

  const sortedUpcoming = upcoming.slice().sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{"< BACK"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Upcoming Movies</Text>
      </View>

      {upcoming.length > 0 && (

      <ScrollView style={styles.scrollview}>
        <View style={styles.container_upcoming}>

          {sortedUpcoming.map((upcoming) => (
              <Upcoming
                key={upcoming.id}
                id={upcoming.id}
                name={upcoming.title}
                thumbnail={upcoming.poster}
                releaseDate={upcoming["release-dateIS"]}
                navigation={navigation}
              />
            ))}
        </View>
      </ScrollView>
      )}

    </View>
  );
}
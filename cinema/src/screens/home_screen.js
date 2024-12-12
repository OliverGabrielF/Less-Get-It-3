import React, { useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/general_style.js';
import { fetchCinemas } from '../actions/cinemasActions.js';
import Cinema from '../components/cinema.js';

export default function HomeScreen({ navigation }) {

  const dispatch = useDispatch();
  const { cinemas } = useSelector((state) => state.cinemas);
  const { token } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (token) {
      dispatch(fetchCinemas());
    }
  }, [token, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Dr. Cinema</Text>
      </View> 

      <Pressable style={styles.upcoming_button} onPress = {() => navigation.navigate("Upcoming")}>
        <Text style={styles.upcoming_button_text}>Upcoming Movies</Text>
      </Pressable>
      {cinemas.length > 0 && (

      <ScrollView style={styles.scrollview}>
        <View style={styles.container_cinema}>

          {cinemas
            .slice()
            // Comma ignoring sort due to data provided
            .sort((a, b) => {
              const nameA = a.name.replace(/,/g, '');
              const nameB = b.name.replace(/,/g, '');
              return nameA.localeCompare(nameB);
            })
            .map((cinema) => (
              <Cinema
                key={cinema.id}
                id={cinema.id}
                name={cinema.name}
                address={cinema["address\t"]}
                city={cinema.city}
                phone={cinema.phone}
                website={cinema.website}
                description={cinema.description}
                navigation={navigation}
              />
            ))}
        </View>
      </ScrollView>
      )}
    </View>
  );
}

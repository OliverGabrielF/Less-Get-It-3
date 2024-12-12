import React, { useEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
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

      <Button onPress = {() => navigation.navigate("Upcoming", { cinemaId: id })} title="UPCOMING MOVIES" />

      <View>
        <Text>There's a darkness inside of you</Text>
        {cinemas.length > 0 && (

        <ScrollView style={styles.scrollview}>
          <View style={styles.container_contact}>
            {cinemas.map((cinema) => (
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
    </View>
  );
}

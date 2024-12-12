import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCinemas } from '../actions/cinemasActions.js';
import styles from '../styles/cinema_detail_style.js';

export default function CinemaDetailScreen({ navigation, route }) {

  const { cinemaId } = route.params;
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
        <TouchableOpacity style={styles.back_home} onPress={() => navigation.goBack("Home")}>
          <Text style={styles.buttonTxt}>{"< BACK"}</Text>
        </TouchableOpacity>
        <Text style={styles.header_text}>Dr. Cinema</Text>
      </View>


      <View style={styles.contact_info_container}>
        <View style={styles.contact_text_container}>
          <Text style={styles.contact_text_name}>{cinemas[0].name}</Text>
          <Text style={styles.contact_text}>{cinemas[0].description}</Text>
          <Text style={styles.contact_text}>{cinemas[0]["address\t"]}</Text>
          <Text style={styles.contact_text}>{cinemas[0].phone}</Text>
          <Text style={styles.contact_text}>{cinemas[0].website}</Text>
        </View>
      </View>
      <Text style={styles.movies_shown_text}>Movies shown in {cinemas[0].name}</Text>
    </View>
  );
}

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
        <Text style={styles.header_text}>{cinemas[0].name}</Text>
      </View>

      {/* Back button to navigate back home */}
      <View style={styles.back_home}>
        <TouchableOpacity style={styles.back_home} onPress={() => navigation.goBack("Home")}>
          <Text style={styles.buttonTxt}>{"< BACK"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contact_info_container}>
        <View style={styles.contact_text_container}>
          <Text style={styles.contact_text}>{cinemas[0].description}</Text>
          <Text style={styles.contact_text}>{cinemas[0].address}</Text>
          <Text style={styles.contact_text}>{cinemas[0].phone}</Text>
          <Text style={styles.contact_text}>{cinemas[0].website}</Text>
        </View>
      </View>
    </View>
  );
}

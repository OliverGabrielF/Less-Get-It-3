import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/general_style.js';
import { fetchCinemas } from '../actions/cinemasActions.js';

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
    <View>
      <View style={styles.header}/>
    </View>
  );
}

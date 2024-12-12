import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUpcoming } from '../actions/upcomingActions.js';
import styles from '../styles/cinema_detail_style.js';

export default function UpcomingMoviesScreen({ navigation }) {

  const dispatch = useDispatch();
  const { upcoming } = useSelector((state) => state.upcoming);
  const { token } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (token) {
      dispatch(fetchUpcoming());
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
    </View>
  );
}

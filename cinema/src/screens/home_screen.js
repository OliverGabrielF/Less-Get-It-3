import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/general_style.js';
import { fetchCinemas } from '../actions/cinemasActions.js';

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
    <View>
      <View style={styles.header}>
        <Text style={styles.header_text}>Dr.Cinema</Text>
      </View>
      <View>
        <Text>There's a darkness inside of you</Text>
        {cinemas.length > 0 && (
          <View>
            <Button onPress={() => navigation.navigate("Cinema", { cinemaId: cinemas[0].id })} title="Go to cinema detail"/>
            <Text>First Cinema: {cinemas[0].website}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

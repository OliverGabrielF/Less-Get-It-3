import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';

import styles from '../styles/general_style.js';
import { checkAuthenticationStatus, fetchCinemas } from '../actions/cinemaActions.js';

export default function HomeScreen({ }) {

  const dispatch = useDispatch();
  const { cinemas, token } = useSelector((state) => state.cinemas);

  const handleLogin = () => {
    dispatch(checkAuthenticationStatus(username, password));
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchCinemas());
    }
  }, [token, dispatch]);

  const username = 'your_username';
  const password = 'your_password';

  return (
    <View>
      <View>
        <Text>There's a darkness inside of you</Text>
        <Button onPress={handleLogin} title='Login test'/>
        {cinemas.length > 0 && (
          <View>
            <Text>First Cinema: {cinemas[0].name}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
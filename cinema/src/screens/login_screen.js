import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';

import testImage from '../assets/test.jpg';
import styles from '../styles/login_style.js';
import { checkAuthenticationStatus } from '../actions/cinemaActions.js';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    Name: '',
    password: '',
  });

  const onPressLogin = () => {
    if (state.Name === '' || state.password === '') {
      Alert.alert(
        'Error',
        'Please fill in both Name and Password fields before logging in.'
      );
    } else {
      dispatch(checkAuthenticationStatus(state.Name, state.password));
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={testImage} style={styles.image} />
        <Text style={styles.title}>Toodler</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Name"
            placeholderTextColor="#fff"
            onChangeText={(text) => setState({ ...state, Name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#fff"
            onChangeText={(text) => setState({ ...state, password: text })}
          />
        </View>
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
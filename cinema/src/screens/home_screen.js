import { Text, View, Button } from 'react-native';
// import { MenuProvider } from 'react-native-popup-menu';
import styles from '../styles/general_style.js';

import { useAppState } from '../../context';

export default function HomeScreen({ }) {

  const { state, dispatch, checkAuthenticationStatus } = useAppState();

  const username = 'your_username';
  const password = 'your_password';



  return (
    <View>
      <View>
        <Text>Lorem Ipsum</Text>
        <Text>Lorem Ipsum</Text>
        <Text>Lorem Ipsum</Text>
        <Text>Lorem Ipsum</Text>
        <Text>There's a darkness inside of you</Text>
        <Button onPress={() => checkAuthenticationStatus(username, password, dispatch)} title='Login test'/>
      </View>
    </View>
  );
}
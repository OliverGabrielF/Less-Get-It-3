import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';

import HomeScreen from "./src/screens/home_screen.js";
import LoginScreen from "./src/screens/login_screen.js";
import CinemaDetailScreen from "./src/screens/cinema_detail_screen.js";
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cinema" component={CinemaDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

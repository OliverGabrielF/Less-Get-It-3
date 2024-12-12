import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';

import { store } from './store';
import HomeScreen from "./src/screens/home_screen.js";
import LoginScreen from "./src/screens/login_screen.js";
import CinemaDetailScreen from "./src/screens/cinema_detail_screen.js";
import UpcomingMoviesScreen from "./src/screens/upcoming_movies_screen.js";
import MovieScreen from "./src/screens/movie_screen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cinema" component={CinemaDetailScreen} />
          <Stack.Screen name="Upcoming" component={UpcomingMoviesScreen} />
          <Stack.Screen name="Movie" component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

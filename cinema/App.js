import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import 'react-native-get-random-values';
import HomeScreen from "./src/screens/home_screen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

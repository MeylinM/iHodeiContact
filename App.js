import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "./screens/SplashScreen"; // Importamos el Splash Screen
import HomeScreen from "./screens/HodeiContact"; // Importa la pantalla principal
import HodeiNews from "./screens/HodeiNews"; // Importa la pantalla de noticias
import HodeiPost from "./screens/HodeiPost"; // Importa la pantalla de posts

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="HodeiContact" component={HomeScreen} />
          <Stack.Screen name="HodeiNews" component={HodeiNews} />
          <Stack.Screen name="HodeiPost" component={HodeiPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
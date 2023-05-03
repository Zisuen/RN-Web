import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import ThemesContextProvider from "./store/ThemesContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemesContextProvider>
  );
};

export default App;

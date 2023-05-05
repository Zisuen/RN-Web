import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AddRecipeScreen from "./src/screens/AddRecipeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import StyleContextProvider from "./src/store/StyleContext";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <StyleContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleContextProvider>
  );
};
export default App;

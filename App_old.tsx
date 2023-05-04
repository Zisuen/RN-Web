import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemesContextProvider from "./store/ThemesContext";
import { store } from "./store/store";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemesContextProvider>
    </Provider>
  );
};

export default App;

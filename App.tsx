import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import AddRecipeScreen from "./src/screens/AddRecipeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import StyleContextProvider from "./src/store/StyleContext";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StyleContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StyleContextProvider>
    </Provider>
  );
};

export default App;

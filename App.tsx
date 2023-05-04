import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import StyleContextProvider from "./src/store/StyleContext";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <StyleContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleContextProvider>
  );
};
export default App;

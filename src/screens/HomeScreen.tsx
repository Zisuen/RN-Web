import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleContext } from "../store/StyleContext";
import homeScreen_style from "../styles/HomeScreen.styles";

const HomeScreen = () => {
  const { switchTheme } = useContext(StyleContext);
  const styles = homeScreen_style(useContext(StyleContext));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <TouchableOpacity style={styles.themeBtn} onPress={switchTheme} />
    </View>
  );
};

export default HomeScreen;

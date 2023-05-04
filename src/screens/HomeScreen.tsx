import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyleContext } from "../store/StyleContext";

const HomeScreen = () => {
  const { scale, isPhone, styleValues } = useContext(StyleContext);

  const styles = StyleSheet.create({
    text: {
      fontSize: styleValues.text.large,
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default HomeScreen;

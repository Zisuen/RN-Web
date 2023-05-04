import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Git hub works ?</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

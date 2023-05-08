import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const SubmitBtn = ({ handler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "green",
  },
});

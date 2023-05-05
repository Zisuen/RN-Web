import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyleContext } from "../../../store/StyleContext";

const Information = ({ difficulty, duration }) => {
  const { theme, styleValues } = useContext(StyleContext);
  const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      paddingBottom: 20,
    },
    text: {
      color: theme.text,
      fontSize: styleValues.text.subTitle,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Difficulty: {difficulty}</Text>
      <Text style={styles.text}>Time to prepare: {duration}</Text>
    </View>
  );
};

export default Information;

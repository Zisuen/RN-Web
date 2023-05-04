import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../AppText";
import StepBubble from "./StepBubble";

const RecipeSteps = ({ steps }) => {
  const render = ({ item, index }) => {
    return <StepBubble item={item} index={index} />;
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>Cooking</AppText>
      <FlatList data={steps} renderItem={render} />
    </View>
  );
};

export default RecipeSteps;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    textDecorationLine: "underline",
    marginBottom: 20,
  },
});

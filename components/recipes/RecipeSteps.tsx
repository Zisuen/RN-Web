import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AppText from "../AppText";
import IngredientBubble from "./IngredientBubble";

const RecipeSteps = ({ steps }) => {
  const render = ({ item, index }) => {
    return (
      <View style={styles.stepContainer} key={index}>
        <AppText style={styles.stepText}>{item}</AppText>
      </View>
    );
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
    backgroundColor: "lightyellow",
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 35,
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  stepContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "lightgreen",
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginBottom: 10,
  },
  stepText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

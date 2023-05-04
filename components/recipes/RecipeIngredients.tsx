import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import IngredientBubble from "./IngredientBubble";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>Dish Ingredients</AppText>
      <View style={styles.ingredientsContainer}>
        {ingredients.map((ingredient, index) => (
          <IngredientBubble id={index} ingredient={ingredient} />
        ))}
      </View>
    </View>
  );
};

export default RecipeIngredients;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  ingredientsContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

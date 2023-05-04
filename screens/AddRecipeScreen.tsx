import React from "react";

import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import AppText from "../components/AppText";
import { addRecipe } from "../store/recipeSlice";
import AddRecipeForm from "../components/addRecipe-screen/AddRecipeForm";
import { useState } from "react";
import { OneRecipe } from "../store/recipeSlice";
import { submit } from "../store/idSlice";

const empty = {
  id: 99,
  name: "string",
  duration: "string",
  difficulty: "string",
  ingredients: "string",
  steps: "string",
};

const AddRecipeScreen = () => {
  const dispatch = useDispatch();
  const [newRecipe, setNewRecipe] = useState<OneRecipe>();
  const addRecipeHandler = ({
    id,
    name,
    duration,
    difficulty,
    ingredients,
    steps,
  }) => {
    const newDish = {
      key: id,
      name,
      time: duration,
      difficulty,
      ingredients: ingredients.split(", "),
      steps: steps.split(". "),
    };
    setNewRecipe(newDish);
    dispatch(addRecipe(newDish));
    dispatch(submit());
  };
  return (
    <AppWrapper>
      <TopBar />
      <AppText style={styles.title}>Add Recipe</AppText>
      <AddRecipeForm handleNewRecipe={addRecipeHandler} />
    </AppWrapper>
  );
};

export default AddRecipeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 50,
    marginBottom: 20,
  },
});

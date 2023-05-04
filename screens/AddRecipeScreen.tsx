import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-web";
import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import ViewHelper from "../components/ViewHelper";
import AppText from "../components/AppText";

import getStyle from "../config/styles/getStyle";
import { ThemesContext } from "../store/ThemesContext";
import { RootState } from "../store/store";
import AddRecipeForm from "../components/addRecipe-screen/AddRecipeForm";
import { useState } from "react";
import { OneRecipe } from "../store/recipeSlice";

const empty = {
  id: 99,
  name: "string",
  duration: "string",
  difficulty: "string",
  ingredients: "string",
  steps: "string",
};

const AddRecipeScreen = () => {
  const [newRecipe, setNewRecipe] = useState<OneRecipe>();
  const [testRecipe, setTestRecipe] = useState(empty);
  const addRecipeHandler = ({
    id,
    name,
    duration,
    difficulty,
    ingredients,
    steps,
  }) => {
    const new_Test_Recipe = {
      id,
      name,
      duration,
      difficulty,
      ingredients,
      steps,
    };
    setTestRecipe(new_Test_Recipe);
  };
  return (
    <AppWrapper>
      <TopBar />
      <AppText style={styles.title}>Add Recipe</AppText>
      <AddRecipeForm handleNewRecipe={addRecipeHandler} />
      <AppText>Submit Recipe</AppText>
      <Text>{testRecipe.id}</Text>
      <Text>{testRecipe.name}</Text>
      <Text>{testRecipe.duration}</Text>
      <Text>{testRecipe.difficulty}</Text>
      <Text>{testRecipe.ingredients}</Text>
      <Text>{testRecipe.steps}</Text>
    </AppWrapper>
  );
};

export default AddRecipeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 50,
  },
});

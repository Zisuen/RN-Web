import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemesContext } from "../../store/ThemesContext";
import AppText from "../AppText";
import { DIFF_OPTIONS } from "./DifficultyBtn";
import FormInput from "./FormInput";

const AddRecipeForm = ({ handleNewRecipe }) => {
  const theme = useContext(ThemesContext).theme;
  const newRecipeId = useSelector(
    (state: RootState) => state.identifier.currentKey
  );
  const [r_Id, setR_Id] = useState<number>(newRecipeId);
  const [r_Name, setR_Name] = useState<string>("");
  const nameHandler = (value) => {
    setR_Name(value);
  };
  const [r_Duration, setR_Duration] = useState<string>("");
  const durationHandler = (value) => {
    setR_Duration(value);
  };
  const [r_Difficulty, setR_Difficulty] = useState<DIFF_OPTIONS>("Easy");
  const difficultyHandler = (value) => {
    setR_Difficulty(value);
  };
  const [r_Ingredients, setR_Ingredients] = useState<string>("");
  const ingredientsHandler = (value) => {
    setR_Ingredients(value);
  };
  const [r_Steps, setR_Steps] = useState<string>("");
  const stepsHandler = (value) => {
    setR_Steps(value);
  };

  const sendNewRecipe = () => {
    handleNewRecipe({
      id: r_Id,
      name: r_Name,
      duration: r_Duration,
      difficulty: r_Difficulty,
      ingredients: r_Ingredients,
      steps: r_Steps,
    });
    setR_Name("");
    setR_Duration("");
    setR_Difficulty("Easy");
    setR_Ingredients("");
    setR_Steps("");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.secondary }]}>
      <AppText style={styles.recipeId}>Recipe ID: {newRecipeId}</AppText>
      <FormInput
        formTitle="Recipe Name"
        size="small"
        current={r_Name}
        handler={nameHandler}
      />
      <FormInput
        formTitle="Recipe Duration"
        size="small"
        current={r_Duration}
        handler={durationHandler}
      />
      <FormInput
        formTitle="Recipe Difficulty"
        size="small"
        current={r_Difficulty}
        handler={difficultyHandler}
      />
      <FormInput
        formTitle="Recipe Ingredients"
        size="large"
        current={r_Ingredients}
        handler={ingredientsHandler}
      />
      <FormInput
        formTitle="Recipe Steps"
        size="large"
        current={r_Steps}
        handler={stepsHandler}
      />
      <Text>{r_Id}</Text>
      <Text>{r_Name}</Text>
      <Text>{r_Duration}</Text>
      <Text>{r_Difficulty}</Text>
      <Text>{r_Ingredients}</Text>
      <Text>{r_Steps}</Text>
      <TouchableOpacity
        style={{ width: 50, height: 50, backgroundColor: "red" }}
        onPress={sendNewRecipe}
      />
    </View>
  );
};

export default AddRecipeForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "95%",
    padding: 25,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
  },
  recipeId: {
    fontSize: 25,
    marginBottom: 20,
  },
});

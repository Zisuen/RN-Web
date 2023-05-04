import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-web";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemesContext } from "../../store/ThemesContext";
import AppText from "../custom-components/AppText";
import { DIFF_OPTIONS } from "./DifficultyBtn";
import FormInput from "./FormInput";
import UploadBtn from "./UploadBtn";

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
  const [message, setMessage] = useState("");
  const printMessage = (isSuccess: boolean) => {
    if (isSuccess) {
      setMessage("Recipe Added!");
    } else {
      setMessage("Missing Data.");
    }
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const sendNewRecipe = () => {
    const allData = r_Name && r_Duration && r_Ingredients && r_Steps;
    if (allData) {
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
      printMessage(true);
    } else {
      printMessage(false);
    }
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
      <View style={styles.uploadContainer}>
        <AppText style={styles.uploadText}>Submit Recipe</AppText>
        <UploadBtn handle={sendNewRecipe} />
        <AppText style={styles.message}>{message}</AppText>
      </View>
    </View>
  );
};

export default AddRecipeForm;

const styles = StyleSheet.create({
  container: {
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
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadText: {
    fontSize: 40,
  },
  message: {
    fontSize: 50,
  },
});

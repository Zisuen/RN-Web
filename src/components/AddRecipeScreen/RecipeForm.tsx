import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RecipeInput from "./RecipeInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { StyleContext } from "../../store/StyleContext";
import SubmitBtn from "./SubmitBtn";
import { OneRecipe } from "../../store/recipeSlice";

export type DIFF = "Easy" | "Medium" | "Hard" | "Pro";
const emptyRecipe: OneRecipe = {
  key: 7777,
  name: "emptyRecipe",
  difficulty: "Hard",
  time: "0 mins",
  ingredients: ["some"],
  steps: ["some"],
};
type PROPS = {
  handleNewRecipe: (inputRecipe: OneRecipe) => void;
};
export type FN_Props = {
  type: "name" | "difficulty" | "time" | "ingredients" | "steps";
  load: string;
  diff: DIFF;
};
const showNew = (plup: OneRecipe) => {
  const { key, name, difficulty, time, ingredients, steps } = plup;
  return (
    <>
      <Text>{key}</Text>
      <Text>{name}</Text>
      <Text>{difficulty}</Text>
      <Text>{time}</Text>
      <Text>{ingredients}</Text>
      <Text>{steps}</Text>
    </>
  );
};

const RecipeForm = ({ handleNewRecipe }: PROPS) => {
  const id = useSelector((state: RootState) => state.identifier.currentKey);
  const { styleValues } = useContext(StyleContext);
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginHorizontal: 15,
    },
    id: {
      marginBottom: 10,
      fontSize: styleValues.text.siteTitle,
    },
  });
  const [newRecipe, setNewRecipe] = useState(emptyRecipe);
  const [r_Name, setR_Name] = useState<string>("");
  const r_NameHandler = (load: string) => setR_Name(load);
  const [r_Difficulty, setR_Difficulty] = useState<DIFF>("Easy");
  const r_DifficultyHandler = (load: DIFF) => setR_Difficulty(load);
  const [r_Duration, setR_Duration] = useState<string>("");
  const r_DurationHandler = (load: string) => setR_Duration(load);
  const [r_Ingredients, setR_Ingredient] = useState<string>("");
  const r_IngredientsHandler = (load: string) => setR_Ingredient(load);
  const [r_Steps, setR_Steps] = useState<string>("");
  const r_StepsHandler = (load: string) => setR_Steps(load);
  const savingRecipe: OneRecipe = {
    key: id,
    name: r_Name,
    difficulty: r_Difficulty,
    time: r_Duration,
    ingredients: r_Ingredients.split(", "),
    steps: r_Steps.split(". "),
  };
  const uploadNewRecipe = () => {
    handleNewRecipe(savingRecipe);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.id}>Recipe ID: {id}</Text>
      <RecipeInput
        size={"medium"}
        title={"name"}
        value={r_Name}
        handler={r_NameHandler}
      />
      <RecipeInput
        size={"small"}
        title={"difficulty"}
        difficulty={r_Difficulty}
        handler={r_DifficultyHandler}
      />
      <RecipeInput
        size="small"
        title={"duration"}
        value={r_Duration}
        handler={r_DurationHandler}
      />
      <RecipeInput
        size="large"
        title={"ingredients"}
        value={r_Ingredients}
        handler={r_IngredientsHandler}
      />
      <RecipeInput
        size={"large"}
        title={"steps"}
        value={r_Steps}
        handler={r_StepsHandler}
      />
      <SubmitBtn handler={uploadNewRecipe} />
    </View>
  );
};

export default RecipeForm;

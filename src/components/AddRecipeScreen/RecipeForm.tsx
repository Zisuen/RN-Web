import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import RecipeInput from "./RecipeInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { StyleContext } from "../../store/StyleContext";
import { OneRecipe } from "../../store/recipeSlice";
import UploadBtn from "./UploadBtn";

export type DIFF = "Easy" | "Medium" | "Hard" | "Pro";
type PROPS = {
  handleNewRecipe: (inputRecipe: OneRecipe) => void;
};
export type FN_Props = {
  type: "name" | "difficulty" | "time" | "ingredients" | "steps";
  load: string;
  diff: DIFF;
};

const RecipeForm = ({ handleNewRecipe }: PROPS) => {
  const id = useSelector((state: RootState) => state.identifier.currentKey);
  const { styleValues, isPhone, theme } = useContext(StyleContext);
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
  const [r_Key, setR_Key] = useState<number>(id);
  const [r_Name, setR_Name] = useState<string>("");
  const r_NameHandler = (load: string) => setR_Name(load);
  const [r_Difficulty, setR_Difficulty] = useState<DIFF>("Easy");
  const r_DifficultyHandler = (load: DIFF) => setR_Difficulty(load);
  const [r_Duration, setR_Duration] = useState<string>("");
  const r_DurationHandler = (load: string) => setR_Duration(load);
  const [r_Ingredients, setR_Ingredients] = useState<string>("");
  const r_IngredientsHandler = (load: string) => setR_Ingredients(load);
  const [r_Steps, setR_Steps] = useState<string>("");
  const r_StepsHandler = (load: string) => setR_Steps(load);
  const [message, setMessage] = useState("");
  const printMessage = (isSuccess: boolean) => {
    if (isSuccess) {
      setMessage("Recipe Added!");
      isPhone && Alert.alert("Recipe Added!");
    } else {
      setMessage("Missing Data.");
      isPhone && Alert.alert("Missing Data.");
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const uploadNewRecipe = () => {
    const allData = r_Name && r_Duration && r_Ingredients && r_Steps;
    if (allData) {
      handleNewRecipe({
        key: r_Key,
        name: r_Name,
        time: r_Duration,
        difficulty: r_Difficulty,
        ingredients: r_Ingredients.split(", "),
        steps: r_Steps.split(". "),
      });
      setR_Name("");
      setR_Duration("");
      setR_Difficulty("Easy");
      setR_Ingredients("");
      setR_Steps("");
      printMessage(true);
    } else {
      printMessage(false);
      console.log("ERROR");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
        >
          <Text
            style={{ color: theme.text, fontSize: styleValues.text.siteTitle }}
          >
            Add Recipe
          </Text>
          <UploadBtn handle={uploadNewRecipe} />
          {!isPhone && (
            <Text style={{ fontSize: styleValues.text.siteTitle }}>
              {message}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeForm;

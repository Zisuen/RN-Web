import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";
import AppText from "../AppText";
import DifficultyBtn, { DIFF_OPTIONS } from "./DifficultyBtn";

type Form_Props = {
  formTitle:
    | "Recipe Name"
    | "Recipe Duration"
    | "Recipe Difficulty"
    | "Recipe Ingredients"
    | "Recipe Steps";
  size: "small" | "medium" | "large";
  current: string | DIFF_OPTIONS;
  handler: (value) => void;
};

const FormInput = ({ formTitle, size, current, handler }: Form_Props) => {
  const theme = useContext(ThemesContext).theme;
  const getSize = (dim: "small" | "medium" | "large"): string => {
    switch (dim) {
      case "small":
        return "30%";
      case "medium":
        return "60%";
      case "large":
        return "80%";
      default:
        return "5%";
    }
  };
  const [chosenDifficulty, setChosenDifficulty] = useState<
    "Easy" | "Medium" | "Hard"
  >("Easy");
  const chooseDifficulty = (difficult: "Easy" | "Medium" | "Hard") => {
    setChosenDifficulty(difficult);
    handler(difficult);
  };

  // const [userInput, onChangeText] = useState("");
  const changeHandle = (textInput) => {
    handler(textInput);
    // onChangeText(textInput);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{formTitle}:</AppText>
      {formTitle !== "Recipe Difficulty" ? (
        <TextInput
          onChangeText={changeHandle}
          value={current}
          style={[
            styles.textInput,
            { backgroundColor: theme.neutral, width: getSize(size) },
          ]}
        />
      ) : (
        <View style={{ flexDirection: "row" }}>
          <DifficultyBtn
            type="Easy"
            chosen={current}
            choiceHandle={chooseDifficulty}
          />
          <DifficultyBtn
            type="Medium"
            chosen={current}
            choiceHandle={chooseDifficulty}
          />
          <DifficultyBtn
            type="Hard"
            chosen={current}
            choiceHandle={chooseDifficulty}
          />
        </View>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    marginRight: 20,
  },
  textInput: {
    fontSize: 25,
    padding: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
  },
});

import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { StyleContext } from "../../store/StyleContext";
import DifficultyBtn from "./DifficultyBtn";
import { DIFF } from "./RecipeForm";

type Props = {
  title: "name" | "difficulty" | "duration" | "ingredients" | "steps";
  size: "small" | "medium" | "large";
  handler: (load: string) => void;
  value?: string;
  difficulty?: DIFF;
};

const RecipeInput = ({ title, size, value, handler, difficulty }: Props) => {
  const { isPhone, styleValues, theme } = useContext(StyleContext);
  const getSize = ({ size }) => {
    switch (size) {
      case "small":
        return 200;
      case "medium":
        return 250;
      case "large":
        return "100%";
      default:
        return 20;
    }
  };
  const styles = StyleSheet.create({
    rootContainer: {
      flexDirection: isPhone ? "column" : "row",
      width: "100%",
      marginBottom: 10,
      alignItems: !isPhone ? "center" : "flex-start",
    },
    title: {
      color: theme.text,
      fontSize: styleValues.text.siteTitle,
      marginBottom: 3,
    },
    input: {
      backgroundColor: theme.tertiery,
      width: getSize({ size }),
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: styleValues.text.subTitle,
      borderRadius: 15,
      borderWidth: StyleSheet.hairlineWidth,
    },
  });

  return (
    <View style={styles.rootContainer}>
      {title === "difficulty" ? (
        <>
          <Text style={styles.title}>Recipe {title}:</Text>
          <DifficultyBtn chosen={difficulty} handle={handler} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Recipe {title}:</Text>
          <TextInput
            style={styles.input}
            placeholder={title}
            placeholderTextColor={"grey"}
            value={value}
            onChangeText={handler}
          />
        </>
      )}
    </View>
  );
};

export default RecipeInput;

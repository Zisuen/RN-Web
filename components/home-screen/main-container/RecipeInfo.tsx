import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../custom-components/AppText";

type Props = {
  recipeInfo: {
    time: string;
    difficulty: string;
  };
};

const RecipeInfo = ({ recipeInfo }: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        Preparation should take: {recipeInfo.time}
      </AppText>
      <AppText style={styles.text}>Diffiulty: {recipeInfo.difficulty}</AppText>
    </View>
  );
};

export default RecipeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
    marginBottom: 40,
  },
  text: {
    fontSize: 35,
  },
});

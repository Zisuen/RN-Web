import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { OneRecipe } from "../../../store/recipeSlice";
import { StyleContext } from "../../../store/StyleContext";
import Information from "./Information";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Title from "./Title";

type Props = {
  recipe: OneRecipe;
  closeRecipe: () => void;
};

const PrintRecipe = ({ recipe, closeRecipe }: Props) => {
  const { theme, resize } = useContext(StyleContext);
  const isValid = recipe.name !== "dummy";
  const styles = StyleSheet.create({
    displayContainer: {
      flex: 3,
      padding: resize(20),
      width: "100%",
    },
  });
  return (
    <View style={styles.displayContainer}>
      <Title
        isValid={isValid}
        recipeName={recipe.name}
        closeRecipe={closeRecipe}
      />
      {isValid && (
        <>
          <Information difficulty={recipe.difficulty} duration={recipe.time} />
          <Ingredients ingredients={recipe.ingredients} />
          <Steps steps={recipe.steps} />
        </>
      )}
    </View>
  );
};

export default PrintRecipe;

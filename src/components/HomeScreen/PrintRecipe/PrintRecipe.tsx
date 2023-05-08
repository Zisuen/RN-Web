import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { OneRecipe } from "../../../store/recipeSlice";
import { StyleContext } from "../../../store/StyleContext";
import DeleteBtn from "./DeleteBtn";
import Information from "./Information";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Title from "./Title";

type Props = {
  recipe: OneRecipe;
  closeRecipe: () => void;
  deleteHandle: (keyToRemove) => void;
};

const PrintRecipe = ({ recipe, closeRecipe, deleteHandle }: Props) => {
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
      <ScrollView>
        <Title
          isValid={isValid}
          recipeName={recipe.name}
          closeRecipe={closeRecipe}
        />
        {isValid && (
          <>
            <Information
              difficulty={recipe.difficulty}
              duration={recipe.time}
            />
            <Ingredients ingredients={recipe.ingredients} />
            <Steps steps={recipe.steps} />
          </>
        )}
        {isValid && (
          <DeleteBtn deleteRecipe={deleteHandle} keyToDelete={recipe.key} />
        )}
      </ScrollView>
    </View>
  );
};

export default PrintRecipe;

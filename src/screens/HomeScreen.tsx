import React, { useState } from "react";
import { Alert } from "react-native";
import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";
import DataContainer from "../components/HomeScreen/DataContainer";
import Recipes from "../components/HomeScreen/Recipes";
import PrintRecipe from "../components/HomeScreen/PrintRecipe/PrintRecipe";
import { OneRecipe } from "../store/recipeSlice";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../store/recipeSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const emptyRecipe: OneRecipe = {
    key: 99,
    name: "dummy",
    difficulty: "Easy",
    ingredients: ["none"],
    steps: ["none"],
    time: "0",
  };
  const [selectedRecipe, setSelectedRecipe] = useState<OneRecipe>(emptyRecipe);
  const selectRecipeHandler = (recipe) => {
    setSelectedRecipe(recipe);
  };
  const closeRecipeHandler = () => {
    setSelectedRecipe(emptyRecipe);
  };
  const deleteRecipe = (keyToRemove) => {
    dispatch(removeRecipe(keyToRemove));
    Alert.alert("Recipe Removed");
    closeRecipeHandler();
  };

  return (
    <RootContainer>
      <InnerContainer>
        <DataContainer>
          <Recipes selectRecipeHandler={selectRecipeHandler} />
          <PrintRecipe
            recipe={selectedRecipe}
            closeRecipe={closeRecipeHandler}
            deleteHandle={deleteRecipe}
          />
        </DataContainer>
      </InnerContainer>
    </RootContainer>
  );
};

export default HomeScreen;

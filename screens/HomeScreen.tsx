import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../store/recipeSlice";
import { OneRecipe } from "../store/recipeSlice";

import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import DataContainer from "../components/recipes/DataContainer";
import MainContainer from "../components/recipes/MainContainer";
import AppBody from "../components/AppBody";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedRecipe, setSelectedRecipe] = useState<OneRecipe | {}>();
  const selectRecipeHandler = (recipe: OneRecipe | {}) => {
    setSelectedRecipe(recipe);
  };
  const deselectRecipeHandler = () => {
    setSelectedRecipe();
  };
  const deleteRecipeHandler = (recipeID: number) => {
    setSelectedRecipe();
    dispatch(removeRecipe(recipeID));
  };

  return (
    <AppWrapper>
      <TopBar />
      <AppBody>
        <DataContainer selectHandler={selectRecipeHandler} />
        <MainContainer
          data={selectedRecipe}
          closeRecipeHandler={deselectRecipeHandler}
          deleteRecipe={deleteRecipeHandler}
        />
      </AppBody>
    </AppWrapper>
  );
};

export default HomeScreen;

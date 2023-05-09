import React from "react";
import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";
import RecipeForm from "../components/AddRecipeScreen/RecipeForm";
import { OneRecipe } from "../store/recipeSlice";
import { useDispatch } from "react-redux";
import { addRecipe } from "../store/recipeSlice";
import { submit } from "../store/idSlice";

const AddRecipeScreen = () => {
  const dispatch = useDispatch();
  const handleUpdate = (inputRecipe: OneRecipe) => {
    dispatch(addRecipe(inputRecipe));
    dispatch(submit());
  };
  return (
    <RootContainer>
      <InnerContainer>
        <RecipeForm handleNewRecipe={handleUpdate} />
      </InnerContainer>
    </RootContainer>
  );
};

export default AddRecipeScreen;

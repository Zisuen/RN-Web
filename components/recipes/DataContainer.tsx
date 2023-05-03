import React from "react";
import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import getStyle from "../../config/styles/getStyle";
import { OneRecipe, RecipesState } from "../../store/recipeSlice";
import { ThemesContext } from "../../store/ThemesContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import RecipeLabel from "./RecipeLabel";

const DataContainer = ({ selectHandler }) => {
  const isWeb = useContext(ThemesContext).appData.isWeb;
  const styles = getStyle(isWeb);
  const recipes = useSelector((state: RootState) => state.recipes);

  const renderRecipes = ({ item }) => {
    return <RecipeLabel item={item} handleSelectLabel={selectHandler} />;
  };

  return (
    <FlatList
      style={[styles.recipesContainer, { flex: 1 }]}
      data={recipes}
      renderItem={renderRecipes}
    />
  );
};

export default DataContainer;

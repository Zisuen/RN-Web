import React from "react";
import { useContext, useState } from "react";
import { View } from "react-native";
import { ThemesContext } from "../store/ThemesContext";

import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import getStyle from "../config/styles/getStyle";
import DataContainer from "../components/recipes/DataContainer";
import MainContainer from "../components/recipes/MainContainer";
import { OneRecipe } from "../store/recipeSlice";

const HomeScreen = () => {
  const theme = useContext(ThemesContext);
  const styles = getStyle(theme.appData.isWeb);

  const [selectedRecipe, setSelectedRecipe] = useState<OneRecipe>();
  const selectRecipeHandler = (recipe: OneRecipe) => {
    setSelectedRecipe(recipe);
  };
  const deselectRecipeHandler = () => {
    setSelectedRecipe();
  };

  return (
    <AppWrapper>
      <TopBar />
      <View style={styles.appBody}>
        <DataContainer selectHandler={selectRecipeHandler} />
        <MainContainer
          data={selectedRecipe}
          closeRecipeHandler={deselectRecipeHandler}
        />
      </View>
    </AppWrapper>
  );
};

export default HomeScreen;

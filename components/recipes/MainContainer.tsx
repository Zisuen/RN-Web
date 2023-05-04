import React from "react";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import getStyle from "../../config/styles/getStyle";
import { OneRecipe } from "../../store/recipeSlice";
import { ThemesContext } from "../../store/ThemesContext";
import DeleteBtn from "./DeleteBtn";
import MainHeader from "./MainHeader";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipeSteps from "./RecipeSteps";

type DataContainer_Props = {
  data: OneRecipe | undefined;
  closeRecipeHandler: () => void;
  deleteRecipe: (recipeID: number) => void;
};

const MainContainer = ({
  data,
  closeRecipeHandler,
  deleteRecipe,
}: DataContainer_Props) => {
  const isWeb = useContext(ThemesContext).appData.isWeb;
  const styles = getStyle(isWeb);
  const emptyMsg =
    "You haven't selected any recipe to view, please select a recipe.";

  return (
    <ScrollView style={[styles.mainBodyContainer, { flex: 3 }]}>
      {data ? (
        <View key={Math.random()}>
          <MainHeader
            data={{ title: data.name, isChosen: true }}
            closeRecipe={closeRecipeHandler}
          />
          <View style={{ flex: 1, paddingTop: 20 }}>
            <RecipeInfo
              recipeInfo={{ time: data.time, difficulty: data.difficulty }}
            />
            <RecipeIngredients ingredients={data.ingredients} />
            <RecipeSteps steps={data.steps} />
          </View>
          <DeleteBtn deleteRecipe={deleteRecipe} keyToDelete={data.key} />
        </View>
      ) : (
        <MainHeader
          data={{ title: emptyMsg, isChosen: false }}
          closeRecipe={closeRecipeHandler}
        />
      )}
    </ScrollView>
  );
};

export default MainContainer;

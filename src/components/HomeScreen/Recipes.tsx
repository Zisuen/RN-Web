import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { StyleContext } from "../../store/StyleContext";
import recipes_style from "../../styles/Recipes.styles";

import PhoneWrapper from "./PhoneWrapper";
import CloseModalBtn from "./CloseModalBtn";
import ShowRecipesBtn from "./ShowRecipesBtn";
import RecipeBubble from "./RecipeBubble";

const Recipes = ({ selectRecipeHandler }) => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const { isPhone, theme } = useContext(StyleContext);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((current) => !current);
  };
  const top = useSafeAreaInsets().top;
  const styles = recipes_style({ isPhone, top, theme });
  const selectHandler = (recipe) => {
    selectRecipeHandler(recipe);
    modalHandler();
  };

  const renderRecipe = ({ item }) => {
    return <RecipeBubble recipe={item} select={selectHandler} />;
  };

  return (
    <>
      {isPhone && <ShowRecipesBtn showModal={modalHandler} />}
      <PhoneWrapper isPhone={isPhone} status={modal}>
        <View style={styles.recipesContainer}>
          <CloseModalBtn isPhone={isPhone} closeModal={modalHandler} />
          <FlatList data={recipes} renderItem={renderRecipe} />
        </View>
      </PhoneWrapper>
    </>
  );
};

export default Recipes;

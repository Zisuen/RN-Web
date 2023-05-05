import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleContext } from "../../store/StyleContext";
import recipes_style from "../../styles/Recipes.styles";

import PhoneWrapper from "./PhoneWrapper";
import CloseModalBtn from "./CloseModalBtn";

const Recipes = ({ status, closeModal }) => {
  const { isPhone, theme } = useContext(StyleContext);
  const top = useSafeAreaInsets().top;
  const styles = recipes_style({ isPhone, top, theme });

  return (
    <PhoneWrapper isPhone={isPhone} status={status}>
      <View style={styles.recipesContainer}>
        <CloseModalBtn isPhone={isPhone} closeModal={closeModal} />
        <Text style={{ marginVertical: 10 }}>RECIPES</Text>
      </View>
    </PhoneWrapper>
  );
};

export default Recipes;

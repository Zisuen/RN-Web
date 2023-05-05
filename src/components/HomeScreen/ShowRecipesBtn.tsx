import React from "react";
import { Text, TouchableOpacity } from "react-native";
import showRecipesBtn_style from "../../styles/ShowRecipesBtn.styles";
const ShowRecipesBtn = ({ showModal }) => {
  const styles = showRecipesBtn_style();
  return (
    <TouchableOpacity style={styles.container} onPress={showModal}>
      <Text>RECIPES</Text>
    </TouchableOpacity>
  );
};

export default ShowRecipesBtn;

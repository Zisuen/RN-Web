import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleContext } from "../../store/StyleContext";
import showRecipesBtn_style from "../../styles/ShowRecipesBtn.styles";
const ShowRecipesBtn = ({ showModal }) => {
  const { theme, styleValues } = useContext(StyleContext);
  const styles = showRecipesBtn_style({ theme, styleValues });

  return (
    <TouchableOpacity style={styles.container} onPress={showModal}>
      <Text style={styles.text}>RECIPES</Text>
    </TouchableOpacity>
  );
};

export default ShowRecipesBtn;

import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleContext } from "../../store/StyleContext";
import recipeBubble_style from "../../styles/recipeBubble.styles";

const RecipeBubble = ({ recipe, select }) => {
  const { theme } = useContext(StyleContext);
  const styles = recipeBubble_style({ theme });
  return (
    <TouchableOpacity style={styles.container} onPress={() => select(recipe)}>
      <Text style={styles.text}>{recipe.name}</Text>
    </TouchableOpacity>
  );
};

export default RecipeBubble;

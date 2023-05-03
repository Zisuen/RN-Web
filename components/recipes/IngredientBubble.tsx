import React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";
import AppText from "../AppText";

const IngredientBubble = ({ ingredient, key }) => {
  const theme = useContext(ThemesContext).theme;

  return (
    <View
      key={key}
      style={[
        styles.ingredientBubble,
        {
          shadowColor: theme.text,
          shadowOffset: { width: -5, height: 5 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
          borderColor: theme.text,
          backgroundColor: theme.tertiary,
        },
      ]}
    >
      <AppText style={styles.ingredientText}>{ingredient}</AppText>
    </View>
  );
};

export default IngredientBubble;

const styles = StyleSheet.create({
  ingredientBubble: {
    marginRight: 12,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  ingredientText: {
    fontSize: 30,
  },
});

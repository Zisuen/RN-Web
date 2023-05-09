import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyleContext } from "../../../store/StyleContext";

const Ingredients = ({ ingredients }) => {
  const { theme, styleValues } = useContext(StyleContext);
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexWrap: "wrap",
      flexDirection: "row",
      borderBottomWidth: 1,
      paddingBottom: 20,
      paddingTop: 10,
    },
    text: {
      color: theme.text,
      fontSize: styleValues.text.subTitle,
    },
    ingredient: {
      marginTop: 10,
      marginRight: 10,
      padding: 5,
      backgroundColor: theme.secondary,
      borderColor: theme.text,
      borderRadius: 12,
      borderWidth: StyleSheet.hairlineWidth,
    },
    ingredientText: {
      color: theme.text,
      fontWeight: "bold",
      fontSize: styleValues.text.subTitle,
    },
  });
  const getIngredients = ({ item, index }) => {
    return (
      <View key={index} style={styles.ingredient}>
        <Text style={styles.ingredientText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {ingredients.map((item, index) => getIngredients({ item, index }))}
    </View>
  );
};

export default Ingredients;

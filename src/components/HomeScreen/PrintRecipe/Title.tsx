import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import getAsset from "../../../../config/assets";
import { StyleContext } from "../../../store/StyleContext";
const Title = ({ closeRecipe, recipeName, isValid }) => {
  const { styleValues, theme } = useContext(StyleContext);
  const errorMsg = "Select a recipe.";
  const title = recipeName === "dummy" ? errorMsg : recipeName;
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: 20,
      borderBottomColor: isValid && theme.text,
      borderBottomWidth: isValid && 1,
    },
    closeBtn: {
      width: styleValues.logo.small_set,
      height: styleValues.logo.small_set,
    },
    title: {
      color: theme.text,
      fontSize: styleValues.text.siteTitle,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={closeRecipe}>
        <Image style={styles.closeBtn} source={getAsset().closeBtn} />
      </TouchableOpacity>
    </View>
  );
};

export default Title;

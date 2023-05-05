import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyleContext } from "../../store/StyleContext";

const PrintRecipe = () => {
  const { isPhone } = useContext(StyleContext);
  const styles = StyleSheet.create({
    displayContainer: {
      flex: 3,
      width: isPhone && "100%",
      backgroundColor: "#91f8fc",
    },
  });
  return (
    <View style={styles.displayContainer}>
      <Text>Recipe Print Out</Text>
    </View>
  );
};

export default PrintRecipe;

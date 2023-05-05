import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StyleContext } from "../../../store/StyleContext";

const Steps = ({ steps }) => {
  const { theme, styleValues } = useContext(StyleContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  const getSteps = ({ item }) => {
    return (
      <View style={styles.ingredient}>
        <Text style={styles.ingredientText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={steps} renderItem={getSteps} />
    </View>
  );
};

export default Steps;

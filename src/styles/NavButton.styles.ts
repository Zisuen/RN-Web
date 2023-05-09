import { StyleSheet } from "react-native";

const navButton_style = ({ styleValues }) => {
  return StyleSheet.create({
    addRecipeBtn: {
      width: styleValues.logo.small_set,
      height: styleValues.logo.small_set,
    },
  });
};

export default navButton_style;

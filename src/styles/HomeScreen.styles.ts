import { StyleSheet } from "react-native";

const homeScreen_style = ({ styleValues, theme, resize }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightgrey",
      paddingHorizontal: 100,
    },
    innerContainer: {
      flex: 1,
      // paddingHorizontal: 100,
      backgroundColor: "lightblue",
    },
    text: {
      fontSize: styleValues.text.large,
      color: theme.text,
    },
    themeBtn: {
      width: resize(100),
      height: resize(100),
      backgroundColor: "blue",
    },
  });
};

export default homeScreen_style;

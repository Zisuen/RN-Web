import { StyleSheet } from "react-native";

const homeScreen_style = ({ scale, isPhone, styleValues, theme, resize }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgrey",
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

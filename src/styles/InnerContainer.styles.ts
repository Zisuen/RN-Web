import { StyleSheet } from "react-native";

const innerContainer_style = ({ styleValues, theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      maxWidth: styleValues.screen.maximumWidth,
      // backgroundColor: theme.primary,
      backgroundColor: theme.development,
    },
  });
};

export default innerContainer_style;

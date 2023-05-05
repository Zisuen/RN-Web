import { StyleSheet } from "react-native";

const dataConatainer_style = ({ isPhone, theme, resize }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isPhone ? "column" : "row",
      alignItems: isPhone ? "center" : "flex-start",
      paddingHorizontal: resize(10),
      paddingVertical: resize(15),
      backgroundColor: theme.primary,
    },
  });
};

export default dataConatainer_style;

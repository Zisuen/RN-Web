import { StyleSheet } from "react-native";
const showRecipesBtn_style = ({ theme, styleValues }) => {
  return StyleSheet.create({
    container: {
      width: "75%",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: theme.other,
    },
    text: {
      fontSize: styleValues.text.smallTitle,
      fontWeight: "bold",
      color: theme.text,
    },
  });
};
export default showRecipesBtn_style;

import { StyleSheet } from "react-native";

const recipes_style = ({ isPhone, top, theme }) => {
  return StyleSheet.create({
    recipesContainer: {
      flex: 1,
      marginTop: isPhone && top + 70,
      paddingBottom: 10,
      paddingTop: isPhone ? 20 : 10,
      paddingHorizontal: isPhone && 10,
      alignItems: "center",
      backgroundColor: isPhone && theme.primary,
      borderTopWidth: isPhone && 1,
      borderLeftWidth: isPhone && 1,
      borderRightWidth: isPhone && 1,
      borderColor: isPhone && theme.text,
      width: isPhone && "95%",
      height: isPhone && "100%",
      alignSelf: isPhone ? "center" : "baseline",
      borderTopLeftRadius: isPhone && 25,
      borderTopRightRadius: isPhone && 25,
    },
  });
};

export default recipes_style;

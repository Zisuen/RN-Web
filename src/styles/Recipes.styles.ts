import { StyleSheet } from "react-native";

const recipes_style = ({ isPhone, top, theme }) => {
  return StyleSheet.create({
    recipesContainer: {
      flex: 1,
      marginTop: isPhone && top + 70,
      paddingBottom: 10,
      paddingTop: isPhone && 20,
      paddingHorizontal: isPhone && 10,
      alignItems: "center",
      backgroundColor: theme.other,
      width: isPhone && "95%",
      height: isPhone && "100%",
      alignSelf: isPhone ? "center" : "baseline",
      borderRadius: isPhone && 25,
    },
  });
};

export default recipes_style;

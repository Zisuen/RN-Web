import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";

// ! 1480 pixels to work with
const phoneView = (theme) => {
  return StyleSheet.create({
    appContainer: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      maxWidth: 1480,
      paddingTop: "5%",
      marginHorizontal: "5%",
      alignItems: "center",
    },
    appBody: {
      flex: 1,
      flexDirection: "row",
      marginTop: 30,
      width: "100%",
      height: "100%",
    },
    recipesContainer: {
      flex: 1,
      marginHorizontal: 5,
      paddingTop: 10,
      paddingLeft: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#000000",
    },
    mainBodyContainer: {
      flex: 3,
      marginHorizontal: 5,
      paddingTop: 10,
      paddingLeft: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#000000",
    },
    text: {
      fontSize: 40,
      color: theme.text,
    },
    themeSwitchBtn: {},
  });
};

export default phoneView;

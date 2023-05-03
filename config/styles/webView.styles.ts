import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";

// ! 1482 pixels to work with
const webView = (theme) => {
  const thomas = useContext(ThemesContext).theme;
  return StyleSheet.create({
    appContainer: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      minWidth: 1480,
      maxWidth: 2100,
      overflow: "hidden",
      paddingTop: "5%",
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
      backgroundColor: thomas.primary,
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
      color: theme.text,
      fontSize: 50,
    },
    themeSwitchBtn: {},
  });
};

export default webView;

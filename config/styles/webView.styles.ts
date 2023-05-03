import { StyleSheet } from "react-native";
import { COLOR } from "../colors/colors";

// ! 1482 pixels to work with
const webView = (theme: COLOR) => {
  return StyleSheet.create({
    appWrapper: {
      flex: 1,
      backgroundColor: theme.primary,
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
      marginHorizontal: 10,
      paddingTop: 20,
      paddingHorizontal: 30,
      backgroundColor: theme.tertiary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    mainBodyContainer: {
      flex: 3,
      marginHorizontal: 10,
      paddingTop: 20,
      paddingHorizontal: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: theme.secondary,
    },
    text: {
      color: theme.text,
      fontSize: 50,
    },
    themeSwitchBtn: {},
  });
};

export default webView;

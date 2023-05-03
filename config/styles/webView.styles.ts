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
      marginHorizontal: 10,
      paddingTop: 20,
      paddingHorizontal: 30,
      backgroundColor: theme.tertiary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    mainBodyContainer: {
      flex: 1,
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
    recipeLabelContainer: {
      justifyContent: "center",
      backgroundColor: theme.secondary,
      paddingVertical: 10,
      marginBottom: 20,
      borderRadius: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.text,
      shadowColor: theme.text,
      shadowOffset: { width: -5, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    recipeLabelContainerOff: {
      justifyContent: "center",
      backgroundColor: theme.secondaryOff,
      paddingVertical: 10,
      marginBottom: 20,
      borderRadius: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.text,
      shadowColor: theme.text,
      shadowOffset: { width: -5, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    recipeLabelText: {
      fontSize: 35,
      marginHorizontal: 20,
    },
  });
};

export default webView;

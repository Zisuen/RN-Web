import { StyleSheet } from "react-native";
import { COLOR } from "../colors/colors";

// ! 1480 pixels to work with
const phoneView = (theme: COLOR) => {
  return StyleSheet.create({
    appWrapper: {
      flex: 1,
      backgroundColor: theme.primary,
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
      fontSize: 40,
      color: theme.text,
    },
    themeSwitchBtn: {},
  });
};

export default phoneView;

import { StyleSheet } from "react-native";

const topBar_style = ({ theme, isPhone, styleValues, topSpace }) => {
  return StyleSheet.create({
    rootContainer: {
      width: "100%",
      backgroundColor: theme.secondary,
      paddingTop: isPhone ? topSpace : 0,
      alignItems: "center",
    },
    innerContainer: {
      width: "100%",
      maxWidth: styleValues.screen.maximumWidth,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: 65,
    },
    buttonsContainer: {
      flexDirection: "row",
    },
    logo: {
      height: styleValues.logo.small_set,
      width: styleValues.logo.small_set,
      marginHorizontal: 15,
    },
    title: {
      fontSize: styleValues.text.siteTitle,
      color: theme.text,
    },
  });
};

export default topBar_style;

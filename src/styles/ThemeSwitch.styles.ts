import { StyleSheet } from "react-native";

const themeSwitch_style = ({ styleValues }) => {
  return StyleSheet.create({
    themeSwitch: {
      width: styleValues.logo.small_set,
      height: styleValues.logo.small_set,
    },
  });
};

export default themeSwitch_style;

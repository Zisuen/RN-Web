import React from "react";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import getAsset from "../../config/assets";
import { ThemesContext } from "../../store/ThemesContext";
const ThemeSwitch = () => {
  const theme = useContext(ThemesContext);
  return (
    <TouchableOpacity onPress={() => theme.switchTheme()}>
      <Image style={styles.themeSwitch} source={getAsset().themeSwitch} />
    </TouchableOpacity>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  themeSwitch: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
});

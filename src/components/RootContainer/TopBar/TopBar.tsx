import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleContext } from "../../../store/StyleContext";
import getAsset from "../../../../config/assets";
import ThemeSwitch from "./ThemeSwitch";
import NavButton from "./NavButton";
import topBar_style from "../../../styles/TopBar.styles";

const TopBar = () => {
  const { theme, isPhone, styleValues, resize } = useContext(StyleContext);
  const topSpace = useSafeAreaInsets().top;
  const styles = topBar_style({ theme, isPhone, styleValues, topSpace });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={getAsset().logo} />
          <Text style={styles.title}>Little Recipes</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <NavButton />
          <ThemeSwitch />
        </View>
      </View>
    </View>
  );
};

export default TopBar;

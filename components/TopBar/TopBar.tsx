import React from "react";
import { View, StyleSheet, Image } from "react-native";

import getAsset from "../../config/assets";
import AppText from "../AppText";
import NavBtn from "./NavBtn";
import ThemeSwitch from "./ThemeSwitch";

const TopBar = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={getAsset().logo} />
        <AppText style={styles.title}>Little Recipes</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <NavBtn />
        <ThemeSwitch />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 40,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    marginLeft: 20,
    fontSize: 40,
    fontFamily: "Verdana",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});

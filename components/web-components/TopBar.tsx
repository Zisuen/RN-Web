import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";
import getAsset from "../../config/assets";
import { useNavigation, useRoute } from "@react-navigation/native";

const TopBar = () => {
  const theme = useContext(ThemesContext);
  const navigation = useNavigation();
  const route = useRoute();
  const NavBtn = () => {
    if (route.name === "Home") {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("AddRecipe")}>
          <Image style={styles.addRecipeBtn} source={getAsset().addRecipeBtn} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.addRecipeBtn} source={getAsset().homeBtn} />
        </TouchableOpacity>
      );
    }
  };

  const ThemeSwitch = () => {
    return (
      <TouchableOpacity onPress={() => theme.switchTheme()}>
        <Image style={styles.themeSwitch} source={getAsset().themeSwitch} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={getAsset().logo} />
        <Text style={[styles.title, { color: theme.theme.text }]}>
          Little Recipes
        </Text>
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
  themeSwitch: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  addRecipeBtn: {
    width: 60,
    height: 60,
  },
});

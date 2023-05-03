import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import getAsset from "../../config/assets";

import { useRoute, useNavigation } from "@react-navigation/native";

const NavBtn = () => {
  const navigation = useNavigation();
  const route = useRoute();

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

export default NavBtn;

const styles = StyleSheet.create({
  addRecipeBtn: {
    width: 60,
    height: 60,
  },
});

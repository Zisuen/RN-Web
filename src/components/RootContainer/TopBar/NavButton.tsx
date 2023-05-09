import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import getAsset from "../../../config/assets";

import { useRoute, useNavigation } from "@react-navigation/native";
import { StyleContext } from "../../../store/StyleContext";
import navButton_style from "../../../styles/NavButton.styles";

const NavButton = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { styleValues } = useContext(StyleContext);

  const styles = navButton_style({ styleValues });
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

export default NavButton;

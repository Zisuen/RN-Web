import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";
import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import ViewHelper from "../components/ViewHelper";

import getStyle from "../config/styles/getStyle";
import { ThemesContext } from "../store/ThemesContext";

const AddRecipeScreen = () => {
  const theme = useContext(ThemesContext);
  const styles = getStyle(theme.appData.isWeb);

  return (
    <AppWrapper>
      {/* <ViewHelper /> */}
      <TopBar />
      <Text style={styles.text}>Add Recipe</Text>
    </AppWrapper>
  );
};

export default AddRecipeScreen;

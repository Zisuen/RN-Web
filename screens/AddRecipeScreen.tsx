import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TopBar from "../components/web-components/TopBar";
import { ThemesContext } from "../store/ThemesContext";

const AddRecipeScreen = () => {
  const theme = useContext(ThemesContext);
  const styles = theme.style;

  return (
    <View
      style={[
        styles.appContainer,
        { backgroundColor: theme.theme.appBackground },
      ]}
    >
      <View style={styles.rootContainer}>
        <TopBar />
        <Text style={styles.text}>Add Recipe</Text>
        <TouchableOpacity
          style={styles.themeSwitchBtn}
          onPress={theme.switchTheme}
        >
          <Text>THEME</Text>
        </TouchableOpacity>
        <Text>{theme.appWidth}</Text>
      </View>
    </View>
  );
};

export default AddRecipeScreen;

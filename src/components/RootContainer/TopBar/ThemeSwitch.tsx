import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import getAsset from "../../../../config/assets";
import { StyleContext } from "../../../store/StyleContext";
import themeSwitch_style from "../../../styles/ThemeSwitch.styles";

const ThemeSwitch = () => {
  const { styleValues, switchTheme } = useContext(StyleContext);
  const styles = themeSwitch_style({ styleValues });

  return (
    <TouchableOpacity onPress={switchTheme}>
      <Image style={styles.themeSwitch} source={getAsset().themeSwitch} />
    </TouchableOpacity>
  );
};

export default ThemeSwitch;

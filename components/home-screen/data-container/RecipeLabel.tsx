import React from "react";
import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import getStyle from "../../../config/styles/getStyle";
import { ThemesContext } from "../../../store/ThemesContext";
import AppText from "../../custom-components/AppText";

const RecipeLabel = ({ item, handleSelectLabel }) => {
  const isWeb = useContext(ThemesContext).appData.isWeb;
  const styles = getStyle(isWeb);

  const [isHovered, setIsHovered] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const handleLabelSelection = () => {
    console.log("Pressed: " + item.name + ", " + item.key);
    handleSelectLabel(item);
  };

  return (
    <TouchableOpacity
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onPress={handleLabelSelection}
      style={
        isHovered ? styles.recipeLabelContainerOff : styles.recipeLabelContainer
      }
    >
      <AppText style={styles.recipeLabelText}>{item.name}</AppText>
    </TouchableOpacity>
  );
};

export default RecipeLabel;

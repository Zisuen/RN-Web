import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemesContext } from "../../../../store/ThemesContext";
import AppText from "../../../custom-components/AppText";

const StepBubble = ({ item, index }) => {
  const theme = useContext(ThemesContext).theme;
  const [isHover, setIsHover] = useState(false);
  const hoverOn = () => {
    setIsHover(true);
  };
  const hoverOff = () => {
    setIsHover(false);
  };
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(true);
  };
  return (
    <TouchableOpacity
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      key={index}
      style={[
        styles.stepContainer,
        { backgroundColor: isHover ? theme.primaryOff : theme.primary },
      ]}
      onPress={handlePress}
    >
      <AppText style={pressed ? styles.stepTextPressed : styles.stepText}>
        {item}
      </AppText>
    </TouchableOpacity>
  );
};

export default StepBubble;

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  stepText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  stepTextPressed: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
});

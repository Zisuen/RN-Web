import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { ThemesContext } from "../../store/ThemesContext";
import AppText from "../custom-components/AppText";

export type DIFF_OPTIONS = "Easy" | "Medium" | "Hard";

type DifficultyBtn_Props = {
  type: DIFF_OPTIONS;
  chosen: DIFF_OPTIONS;
  choiceHandle: (difficulty: DIFF_OPTIONS) => void;
};

const DifficultyBtn = ({ type, chosen, choiceHandle }: DifficultyBtn_Props) => {
  const theme = useContext(ThemesContext).theme;
  const [hasHover, setHasHover] = useState(false);
  const hoverOn = () => setHasHover(true);
  const hoverOff = () => setHasHover(false);

  const chooseDifficulty = () => {
    choiceHandle(type);
  };

  return (
    <TouchableOpacity
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={[
        styles.container,
        {
          borderColor: chosen === type ? "white" : "black",
          backgroundColor: !hasHover ? theme.primary : theme.primaryOff,
        },
      ]}
      onPress={chooseDifficulty}
    >
      <AppText style={styles.text}>{type}</AppText>
    </TouchableOpacity>
  );
};

export default DifficultyBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 20,
    borderRadius: 15,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 25,
  },
});

import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StyleContext } from "../../store/StyleContext";
import { DIFF } from "./RecipeForm";
type PROPS = {
  chosen: DIFF;
  handle: (load: string) => void;
};
const DifficultyBtn = ({ chosen, handle }: PROPS) => {
  const { theme, styleValues } = useContext(StyleContext);
  const styles = StyleSheet.create({});

  const DiffBtn = ({ chosen, text, handle }) => {
    const styles = StyleSheet.create({
      btn: {
        borderRadius: 15,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: chosen === text ? "#7df279" : theme.tertiery,
        marginRight: 10,
      },
      text: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: styleValues.text.subTitle,
        overflow: "hidden",
      },
    });
    return (
      <TouchableOpacity onPress={() => handle(text)} style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <DiffBtn handle={handle} chosen={chosen} text={"Easy"} />
      <DiffBtn handle={handle} chosen={chosen} text={"Medium"} />
      <DiffBtn handle={handle} chosen={chosen} text={"Hard"} />
    </View>
  );
};

export default DifficultyBtn;

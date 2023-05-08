import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import getAsset from "../../../config/assets";
import { StyleContext } from "../../store/StyleContext";
const UploadBtn = ({ handle }) => {
  const { styleValues } = useContext(StyleContext);
  const [hasHover, setHasHover] = useState(false);
  const hoverOn = () => setHasHover(true);
  const hoverOff = () => setHasHover(false);
  const styles = {
    btn: {
      width: 100,
      height: 100,
    },
  };
  return (
    <TouchableOpacity
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      onPress={handle}
    >
      {!hasHover ? (
        <Image style={styles.btn} source={getAsset().uploadBtn} />
      ) : (
        <Image style={styles.btn} source={getAsset().uploadBtnOff} />
      )}
    </TouchableOpacity>
  );
};

export default UploadBtn;

const styles = StyleSheet.create({
  btn: {
    width: 130,
    height: 130,
  },
});

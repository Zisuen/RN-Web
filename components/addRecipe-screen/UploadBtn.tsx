import React from "react";
import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import getAsset from "../../config/assets";
const UploadBtn = ({ handle }) => {
  const [hasHover, setHasHover] = useState(false);
  const hoverOn = () => setHasHover(true);
  const hoverOff = () => setHasHover(false);
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

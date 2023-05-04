import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import getAsset from "../../../../config/assets";

const CloseBtn = ({ closeRecipe }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={closeRecipe}>
      <Image style={styles.closeBtn} source={getAsset().closeBtn} />
    </TouchableOpacity>
  );
};

export default CloseBtn;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  closeBtn: {
    width: 42,
    opacity: 1,
    height: 42,
  },
});

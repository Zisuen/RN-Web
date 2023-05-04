import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, Image } from "react-native-web";
import getAsset from "../../../config/assets";
import AppText from "../../custom-components/AppText";

const DeleteBtn = ({ deleteRecipe, keyToDelete }) => {
  const [hasHover, setHasHover] = useState(false);
  const hoverOn = () => setHasHover(true);
  const hoverOff = () => setHasHover(false);

  const deleteRecipeHandler = () => {
    deleteRecipe(keyToDelete);
    console.log("Removing" + keyToDelete);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.deleteBtn}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        onPress={deleteRecipeHandler}
      >
        <Image
          style={styles.deleteBtn}
          source={!hasHover ? getAsset().deteleBtn : getAsset().deleteBtnOff}
        />
      </TouchableOpacity>
      {hasHover && <AppText style={styles.deleteText}>Delete Recipe ?</AppText>}
    </View>
  );
};

export default DeleteBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  deleteBtn: {
    width: 100,
    height: 100,
  },
  deleteText: {
    marginLeft: 10,
    fontSize: 40,
  },
});

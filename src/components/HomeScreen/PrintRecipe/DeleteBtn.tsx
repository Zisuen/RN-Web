import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import getAsset from "../../../../config/assets";
import { StyleContext } from "../../../store/StyleContext";

const DeleteBtn = ({ deleteRecipe, keyToDelete }) => {
  const { theme } = useContext(StyleContext);
  const [hasHover, setHasHover] = useState(false);
  const hoverOn = () => setHasHover(true);
  const hoverOff = () => setHasHover(false);

  const deleteRecipeHandler = () => {
    deleteRecipe(keyToDelete);
    console.log("Removing" + keyToDelete);
  };
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
      color: theme.text,
    },
  });

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
      {hasHover && <Text style={styles.deleteText}>Delete Recipe ?</Text>}
    </View>
  );
};

export default DeleteBtn;

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import CloseBtn from "./CloseBtn";

type Props = {
  data: {
    title: string;
    isChosen: boolean;
  };
  closeRecipe: () => void;
};

const MainHeader = ({ data, closeRecipe }: Props) => {
  const { title, isChosen } = data;
  return (
    <View style={styles.container}>
      <AppText style={isChosen ? styles.titleChosen : styles.titleNotChosen}>
        {title}
      </AppText>
      {isChosen && <CloseBtn closeRecipe={closeRecipe} />}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    backgroundColor: "lightgrey",
  },
  titleChosen: {
    marginTop: 20,
    fontSize: 50,
  },
  titleNotChosen: {
    marginTop: 20,
    fontSize: 30,
  },
});

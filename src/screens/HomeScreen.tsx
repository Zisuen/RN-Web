import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";

import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";
import { StyleContext } from "../store/StyleContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DataContainer from "../components/HomeScreen/DataContainer";
import ShowRecipesBtn from "../components/HomeScreen/ShowRecipesBtn";
import Recipes from "../components/HomeScreen/Recipes";

const HomeScreen = () => {
  const { resize, isPhone, theme } = useContext(StyleContext);
  const top = useSafeAreaInsets().top;
  const styles = StyleSheet.create({
    recipesContainer: {
      flex: 1,
      marginTop: isPhone && top + 70,
      paddingBottom: 10,
      paddingTop: isPhone && 20,
      paddingHorizontal: isPhone && 10,
      alignItems: "center",
      backgroundColor: "#70f892",
      width: isPhone && "95%",
      height: isPhone && "100%",
      alignSelf: isPhone ? "center" : "baseline",
      borderRadius: isPhone && 25,
    },
    displayContainer: {
      flex: 3,
      width: isPhone && "100%",
      backgroundColor: "#91f8fc",
    },
    testItem: {
      width: 150,
      height: 40,
      marginBottom: 10,
      backgroundColor: "pink",
    },
  });
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((current) => !current);
  };

  return (
    <RootContainer>
      <InnerContainer>
        <DataContainer>
          {isPhone && <ShowRecipesBtn showModal={modalHandler} />}
          <Recipes status={modal} closeModal={modalHandler} />
          <View style={styles.displayContainer}>
            <Text>Recipe Print Out</Text>
          </View>
        </DataContainer>
      </InnerContainer>
    </RootContainer>
  );
};

export default HomeScreen;

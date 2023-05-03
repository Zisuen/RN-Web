import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemesContext } from "../store/ThemesContext";

import AppText from "../components/AppText";
import AppWrapper from "../components/AppWrapper";
import TopBar from "../components/TopBar/TopBar";
import getStyle from "../config/styles/getStyle";
import DataContainer from "../components/recipes/DataContainer";

const HomeScreen = () => {
  const theme = useContext(ThemesContext);
  const styles = getStyle(theme.appData.isWeb);
  type DUM = {
    name: string;
    time: string;
    difficulty: string;
  }[];
  const dummy: DUM = [
    {
      name: "Rissoto",
      time: "20 min",
      difficulty: "Hard",
    },
    {
      name: "Chilly",
      time: "2 Hours",
      difficulty: "Easy",
    },
    {
      name: "Pizza",
      time: "1 Hour",
      difficulty: "Hard",
    },
  ];

  const getData = (data: DUM) => {
    return data.map((food) => {
      return (
        <View style={item.container}>
          <Text style={item.text}>{food.name}</Text>
          <Text style={item.text}>{food.time}</Text>
          <Text style={item.text}>{food.difficulty}</Text>
        </View>
      );
    });
  };
  return (
    <AppWrapper>
      <TopBar />
      <View style={styles.appBody}>
        <DataContainer isMain={false}>{getData(dummy)}</DataContainer>
        <DataContainer isMain={true}>
          <AppText>Main App body</AppText>
        </DataContainer>
      </View>
    </AppWrapper>
  );
};

export default HomeScreen;

const item = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    marginVertical: 20,
  },
  text: {},
});

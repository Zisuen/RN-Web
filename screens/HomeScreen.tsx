import React from "react";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import TopBar from "../components/web-components/TopBar";
import { ThemesContext } from "../store/ThemesContext";

const HomeScreen = () => {
  const theme = useContext(ThemesContext);
  const styles = theme.style;

  return (
    <View
      style={[
        styles.appContainer,
        { backgroundColor: theme.theme.appBackground },
      ]}
    >
      <View style={styles.rootContainer}>
        <Text>{theme.appWidth}</Text>
        <TopBar />
        <View style={styles.appBody}>
          <ScrollView style={[styles.recipesContainer, { flex: 1 }]}>
            <Text>Recipes</Text>
          </ScrollView>
          <ScrollView style={[styles.mainBodyContainer, { flex: 3 }]}>
            <Text>Main App body</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

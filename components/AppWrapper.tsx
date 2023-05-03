import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import getStyle from "../config/styles/getStyle";
import { ThemesContext } from "../store/ThemesContext";

const AppWrapper = ({ children }) => {
  const isWeb = useContext(ThemesContext).appData.isWeb;
  const styles = getStyle(isWeb);
  return (
    <View style={styles.appWrapper}>
      <View style={styles.rootContainer}>{children}</View>
    </View>
  );
};

export default AppWrapper;

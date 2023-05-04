import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import getStyle from "../../config/styles/getStyle";
import { ThemesContext } from "../../store/ThemesContext";

const AppBody = ({ children }) => {
  const theme = useContext(ThemesContext);
  const styles = getStyle(theme.appData.isWeb);

  return <View style={styles.appBody}>{children}</View>;
};

export default AppBody;

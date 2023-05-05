import React, { useContext } from "react";
import { View } from "react-native";

import { StyleContext } from "../../store/StyleContext";

import TopBar from "./TopBar/TopBar";
import rootContainer_style from "../../styles/RootContainer.styles";

const RootContainer = ({ children }) => {
  const { theme } = useContext(StyleContext);
  const styles = rootContainer_style({ theme });

  return (
    <View style={styles.container}>
      <TopBar />
      {children}
    </View>
  );
};

export default RootContainer;

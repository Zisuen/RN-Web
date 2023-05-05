import React, { useContext } from "react";
import { View, Text } from "react-native";
import { StyleContext } from "../store/StyleContext";
import innerContainer_style from "../styles/InnerContainer.styles";
const InnerContainer = ({ children }) => {
  const { styleValues, theme } = useContext(StyleContext);
  const styles = innerContainer_style({ styleValues, theme });
  return <View style={styles.container}>{children}</View>;
};

export default InnerContainer;

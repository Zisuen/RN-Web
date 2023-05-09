import React, { useContext } from "react";
import { View } from "react-native";
import { StyleContext } from "../../store/StyleContext";
import dataConatainer_style from "../../styles/DataContainer.styles";
const DataContainer = ({ children }) => {
  const { isPhone, theme, resize } = useContext(StyleContext);
  const styles = dataConatainer_style({ isPhone, theme, resize });
  return <View style={styles.container}>{children}</View>;
};

export default DataContainer;

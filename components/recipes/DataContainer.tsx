import React from "react";
import { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import getStyle from "../../config/styles/getStyle";
import { ThemesContext } from "../../store/ThemesContext";

type DataContainer_Props = {
  isMain: boolean;
  children?: React.ReactNode;
  style?: {
    [key: string]: string | number;
  };
};

const DataContainer = ({ isMain, children, style }: DataContainer_Props) => {
  const isWeb = useContext(ThemesContext).appData.isWeb;
  const styles = getStyle(isWeb);

  return (
    <ScrollView
      style={
        isMain
          ? [styles.mainBodyContainer, { flex: 3 }]
          : [styles.recipesContainer, { flex: 1 }]
      }
    >
      {children}
    </ScrollView>
  );
};

export default DataContainer;

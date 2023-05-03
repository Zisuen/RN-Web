import React from "react";
import { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { ThemesContext } from "../store/ThemesContext";
const ViewHelper = () => {
  const appData = useContext(ThemesContext).appData;
  return (
    <>
      <Text>{appData.width}</Text>
      <Text>{appData.isWeb ? "true" : "false"}</Text>
    </>
  );
};

export default ViewHelper;

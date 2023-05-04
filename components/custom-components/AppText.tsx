import React from "react";
import { useContext } from "react";
import { Text } from "react-native";
import { ThemesContext } from "../../store/ThemesContext";

type AppText_Props = {
  children?: React.ReactNode;
  style?: {
    [key: string]: string | number;
  };
};

const AppText = ({ children, style }: AppText_Props) => {
  const theme = useContext(ThemesContext).theme;
  return <Text style={[style, { color: theme.text }]}>{children}</Text>;
};

export default AppText;

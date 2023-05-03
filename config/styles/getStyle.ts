import { useContext } from "react";
import webView from "./webView.styles";
import phoneView from "./phoneView.styles";
import { ThemesContext } from "../../store/ThemesContext";

const getStyle = (isWeb: boolean) => {
  const theme = useContext(ThemesContext).theme;
  if (isWeb) {
    return webView(theme);
  } else {
    return phoneView(theme);
  }
};

export default getStyle;

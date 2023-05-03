import React, { createContext, useState, useEffect } from "react";
import phoneView from "../config/styles/phoneView.styles";
import webView from "../config/styles/webView.styles";
import { COLOR, dark, light } from "../config/colors/colors";
import { RETURN, TEST_STYLE } from "../config/styles/STYLE.type";

type Props = {
  isDark: boolean; // Assets use this
  theme: COLOR; // Theme colors for backgrounds
  style: RETURN;
  appWidth: number; // Just a verification of width
  switchTheme: () => void; // ThemeSwitch handler
};

export const ThemesContext = createContext<Props>({
  isDark: false,
  theme: light,
  style: {},
  appWidth: 0,
  switchTheme: () => {},
});

const ThemesContextProvider = ({ children }) => {
  const [theme, setTheme] = useState<COLOR>(light);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [appWidth, setAppWidth] = useState<number>(window.innerWidth);
  const [style, setStyle] = useState(
    window.innerWidth > 1480 ? webView(light) : phoneView(light)
  );

  const switchTheme = () => {
    setTheme((prev) => (prev === light ? dark : light));
    setIsDark((current) => (current ? false : true));
    setStyle((current) => current);
  };

  useEffect(() => {
    const handleResize = () => {
      setAppWidth(window.innerWidth);
      if (window.innerWidth > 1480) {
        setStyle(webView(theme));
      } else {
        setStyle(phoneView(theme));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value: Props = {
    isDark,
    theme,
    style,
    appWidth,
    switchTheme,
  };
  return (
    <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
  );
};

export default ThemesContextProvider;

import React, { createContext, useState, useEffect } from "react";
import { COLOR, dark, light } from "../config/colors/colors";

type Props = {
  isDark: boolean;
  theme: COLOR;
  appData: {
    width: number;
    isWeb: boolean;
  };
  switchTheme: () => void;
};

export const ThemesContext = createContext<Props>({
  isDark: false,
  theme: light,
  appData: {
    width: window.innerWidth,
    isWeb: window.innerWidth > 1480 ? true : false,
  },
  switchTheme: () => {},
});

const ThemesContextProvider = ({ children }) => {
  const [theme, setTheme] = useState<COLOR>(light);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [appData, setAppData] = useState<{ width: number; isWeb: boolean }>({
    width: window.innerWidth,
    isWeb: window.innerWidth > 1480 ? true : false,
  });

  const switchTheme = () => {
    setTheme((prev) => (prev === light ? dark : light));
    setIsDark((current) => (current ? false : true));
  };

  useEffect(() => {
    const handleResize = () => {
      setAppData({
        width: window.innerWidth,
        isWeb: window.innerWidth > 1480 ? true : false,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value: Props = {
    isDark,
    theme,
    appData,
    switchTheme,
  };
  return (
    <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
  );
};

export default ThemesContextProvider;

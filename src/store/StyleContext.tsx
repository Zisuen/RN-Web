import React, { createContext, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { getValues, STYLE } from "../config/global.style";

type Props = {
  scale: number;
  isPhone: boolean;
  styleValues: STYLE;
};

export const StyleContext = createContext<Props>({
  scale: Dimensions.get("window").width / Dimensions.get("window").height,
  isPhone: Dimensions.get("window").width < 1000,
  styleValues: getValues({
    isPhone: Dimensions.get("window").width < 1000,
    scale: Dimensions.get("window").width / Dimensions.get("window").height,
  }),
});

const StyleContextProvider = ({ children }) => {
  const [scale, setScale] = useState<number>(
    Dimensions.get("window").width / Dimensions.get("window").height
  );
  const [isPhone, setIsPhone] = useState<boolean>(
    Dimensions.get("window").width < 1000
  );
  const [styleValues, setStyleValues] = useState(getValues({ isPhone, scale }));

  useEffect(() => {
    const updateScale = () => {
      setScale(
        Dimensions.get("window").width / Dimensions.get("window").height
      );
      setIsPhone(Dimensions.get("window").width < 1000);
      setStyleValues(getValues({ isPhone, scale }));
    };
    const subscription = Dimensions.addEventListener("change", updateScale);
    return () => {
      subscription.remove();
    };
  }, [isPhone, scale]);

  const value: Props = {
    scale,
    isPhone,
    styleValues,
  };

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};

export default StyleContextProvider;

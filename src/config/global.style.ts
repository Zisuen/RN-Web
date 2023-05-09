export type COLOR = {
  isDark: boolean;
  primary: string;
  secondary: string;
  tertiery: string;
  other: string;
  text: string;
  development: string;
  closeBtn: string;
  darkBackgroundText: string;
};

export const light: COLOR = {
  isDark: false,
  primary: "#cd7d5e",
  secondary: "#ee6631",
  tertiery: "#b9e9f2",
  other: "#774aba",
  text: "#000000",
  development: "#d5fdff",
  closeBtn: "#a21414",
  darkBackgroundText: "#ffffff",
};

export const dark: COLOR = {
  isDark: true,
  primary: "#1f1e4b",
  secondary: "#100f2e",
  tertiery: "#3f4973",
  other: "#414141",
  text: "#ffffff",
  development: "#d5fdff",
  closeBtn: "#711616",
  darkBackgroundText: "#ffffff",
};

export type STYLE = {
  screen: {
    maximumWidth: number;
  };
  text: {
    small: number;
    medium: number;
    large: number;
    siteTitle: number;
    subTitle: number;
    smallTitle: number;
  };
  logo: {
    small_set: number;
  };
};

export const getValues = ({ isPhone, scale }): STYLE => {
  const getSize = (value: number) => (isPhone ? value * scale : value);
  return {
    screen: {
      maximumWidth: 980,
    },
    text: {
      small: getSize(20),
      medium: getSize(30),
      large: getSize(50),
      siteTitle: !isPhone ? 30 : 25,
      subTitle: !isPhone ? 25 : 20,
      smallTitle: !isPhone ? 20 : 15,
    },
    logo: {
      small_set: isPhone ? 42 : 52,
    },
  };
};

export type COLOR = {
  isDark: boolean;
  primary: string;
  secondary: string;
  tertiery: string;
  text: string;
  development: string;
};

export const light: COLOR = {
  isDark: false,
  primary: "#9964ee",
  secondary: "#ee6631",
  tertiery: "#b9e9f2",
  text: "#000000",
  development: "#d5fdff",
};

export const dark: COLOR = {
  isDark: true,
  primary: "#080a2d",
  secondary: "#3d3d3d",
  tertiery: "#3f4973",
  text: "#ffffff",
  development: "#d5fdff",
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
    },
    logo: {
      small_set: isPhone ? 42 : 52,
    },
  };
};

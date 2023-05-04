export type STYLE = {
  text: {
    small: number;
    medium: number;
    large: number;
  };
};

export type COLOR = {
  primary: string;
  secondary: string;
  tertiery: string;
  text: string;
};

export const light: COLOR = {
  primary: "#dd5858",
  secondary: "#dd5858",
  tertiery: "#dd5858",
  text: "#000000",
};

export const dark: COLOR = {
  primary: "#312f2f",
  secondary: "#312f2f",
  tertiery: "#312f2f",
  text: "#ffffff",
};

export const getValues = ({ isPhone, scale }): STYLE => {
  const getSize = (value: number) => (isPhone ? value * scale : value);
  return {
    text: {
      small: getSize(20),
      medium: getSize(30),
      large: getSize(50),
    },
  };
};

export type COLOR = {
  appBackground: string;
  rootBackground: string;
  text: string;
  primary: "#B2a4FF" | "#37306b";

  secondary: "#ffb4b4" | "#66347f";
  secondaryOff: "#c17575" | "#432253";

  tertiary: "#ffdeb4" | "#934784";
  neutral: "#dfd7c3" | "#d27685";
};

const light: COLOR = {
  appBackground: "#d6e9d0",
  rootBackground: "#a1eaf0",
  text: "#000000",
  primary: "#B2a4FF",
  secondary: "#ffb4b4",
  secondaryOff: "#c17575",
  tertiary: "#ffdeb4",
  neutral: "#dfd7c3",
};

const dark: COLOR = {
  appBackground: "#1a2c43",
  rootBackground: "#3a285f",
  text: "#ffffff",
  primary: "#37306b",
  secondary: "#66347f",
  secondaryOff: "#432253",
  tertiary: "#934784",
  neutral: "#d27685",
};

export { light, dark };

export type COLOR = {
  text: string;
  primary: "#B2a4FF" | "#37306b";
  primaryOff: "#8a7cda" | "#1e1943";

  secondary: "#ffb4b4" | "#66347f";
  secondaryOff: "#c17575" | "#432253";

  tertiary: "#ffdeb4" | "#934784";
  neutral: "#dfd7c3" | "#d27685";
};

const light: COLOR = {
  text: "#000000",
  primary: "#B2a4FF",
  primaryOff: "#8a7cda",
  secondary: "#ffb4b4",
  secondaryOff: "#c17575",
  tertiary: "#ffdeb4",
  neutral: "#dfd7c3",
};

const dark: COLOR = {
  text: "#ffffff",
  primary: "#37306b",
  primaryOff: "#1e1943",
  secondary: "#66347f",
  secondaryOff: "#432253",
  tertiary: "#934784",
  neutral: "#d27685",
};

export { light, dark };

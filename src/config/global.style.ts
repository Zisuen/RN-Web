export type STYLE = {
  text: {
    small: number;
    medium: number;
    large: number;
  };
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

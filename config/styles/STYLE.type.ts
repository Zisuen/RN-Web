import { COLOR } from "../colors/colors";

export type RETURN = {
  [key: string]: {
    [key: string]: string | number;
  };
};

export type TEST_STYLE = (theme: COLOR) => RETURN;

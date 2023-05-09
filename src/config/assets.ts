import { useContext } from "react";
import { StyleContext } from "../store/StyleContext";

const getAsset = () => {
  const isDark = useContext(StyleContext).theme.isDark;
  return {
    logo: isDark
      ? require("../assets/logo_dark.png")
      : require("../assets/logo_light.png"),
    themeSwitch: isDark
      ? require("../assets/theme-switch_dark.png")
      : require("../assets/theme-switch_light.png"),
    addRecipeBtn: isDark
      ? require("../assets/addRecipe_dark.png")
      : require("../assets/addRecipe_light.png"),
    homeBtn: isDark
      ? require("../assets/home_dark.png")
      : require("../assets/home_light.png"),
    closeBtn: isDark
      ? require("../assets/close_dark.png")
      : require("../assets/close_light.png"),
    uploadBtn: isDark
      ? require("../assets/upload_dark.png")
      : require("../assets/upload_light.png"),
    uploadBtnOff: isDark
      ? require("../assets/upload_dark_Off.png")
      : require("../assets/upload_light_Off.png"),
    deteleBtn: isDark
      ? require("../assets/delete_dark.png")
      : require("../assets/delete_light.png"),
    deleteBtnOff: isDark
      ? require("../assets/delete_dark_Off.png")
      : require("../assets/delete_light_Off.png"),
  };
};

export default getAsset;

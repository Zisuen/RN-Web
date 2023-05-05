import { useContext } from "react";
import { StyleContext } from "../src/store/StyleContext";
import { ThemesContext } from "../store/ThemesContext";

const getAsset = () => {
  // const isDark = useContext(ThemesContext).isDark;
  const isDark = useContext(StyleContext).theme.isDark;
  return {
    logo: isDark
      ? require("../assets/Icons/logo_dark.png")
      : require("../assets/Icons/logo_light.png"),
    themeSwitch: isDark
      ? require("../assets/Icons/theme-switch_dark.png")
      : require("../assets/Icons/theme-switch_light.png"),
    addRecipeBtn: isDark
      ? require("../assets/Icons/addRecipe_dark.png")
      : require("../assets/Icons/addRecipe_light.png"),
    homeBtn: isDark
      ? require("../assets/Icons/home_dark.png")
      : require("../assets/Icons/home_light.png"),
    closeBtn: isDark
      ? require("../assets/Icons/close_dark.png")
      : require("../assets/Icons/close_light.png"),
    uploadBtn: isDark
      ? require("../assets/Icons/upload_dark.png")
      : require("../assets/Icons/upload_light.png"),
    uploadBtnOff: isDark
      ? require("../assets/Icons/upload_dark_Off.png")
      : require("../assets/Icons/upload_light_Off.png"),
    deteleBtn: isDark
      ? require("../assets/Icons/delete_dark.png")
      : require("../assets/Icons/delete_light.png"),
    deleteBtnOff: isDark
      ? require("../assets/Icons/delete_dark_Off.png")
      : require("../assets/Icons/delete_light_Off.png"),
  };
};

export default getAsset;

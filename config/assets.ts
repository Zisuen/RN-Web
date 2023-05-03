import { useContext } from "react";
import { ThemesContext } from "../store/ThemesContext";

const getAsset = () => {
  const isDark = useContext(ThemesContext).isDark;
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
  };
};

export default getAsset;

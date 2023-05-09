import { StyleSheet } from "react-native";
const rootContainer_style = ({ theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: "center",
    },
  });
};
export default rootContainer_style;

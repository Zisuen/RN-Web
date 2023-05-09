import { StyleSheet } from "react-native";

const recipeBubble_style = ({ theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 12,
      backgroundColor: theme.other,
    },
    text: {
      color: theme.text,
      fontSize: 30,
    },
  });
};

export default recipeBubble_style;

import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleContext } from "../../store/StyleContext";

const CloseModalBtn = ({ isPhone, closeModal }) => {
  const { theme, styleValues } = useContext(StyleContext);
  return (
    isPhone && (
      <TouchableOpacity
        style={{
          width: "50%",
          height: 30,
          borderRadius: 5,
          backgroundColor: theme.closeBtn,
          marginBottom: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={closeModal}
      >
        <Text
          style={{
            fontSize: styleValues.text.subTitle,
            color: theme.darkBackgroundText,
          }}
        >
          CLOSE
        </Text>
      </TouchableOpacity>
    )
  );
};

export default CloseModalBtn;

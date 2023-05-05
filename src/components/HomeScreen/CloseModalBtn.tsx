import React from "react";
import { TouchableOpacity } from "react-native";

const CloseModalBtn = ({ isPhone, closeModal }) => {
  return (
    isPhone && (
      <TouchableOpacity
        style={{
          width: 50,
          height: 20,
          borderRadius: 5,
          backgroundColor: "red",
        }}
        onPress={closeModal}
      />
    )
  );
};

export default CloseModalBtn;

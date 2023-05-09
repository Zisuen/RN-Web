import React from "react";
import { Modal } from "react-native";

const PhoneWrapper = ({ children, isPhone, status }) => {
  return isPhone ? (
    <Modal visible={status} transparent={true} animationType="slide">
      {children}
    </Modal>
  ) : (
    <>{children}</>
  );
};

export default PhoneWrapper;

import React from "react";
import { Text } from "react-native";

import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";

const AddRecipeScreen = () => {
  return (
    <RootContainer>
      <InnerContainer>
        <Text>Add Recipe Screen</Text>
      </InnerContainer>
    </RootContainer>
  );
};

export default AddRecipeScreen;

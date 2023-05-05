import React from "react";
import { Text } from "react-native";

import RootContainer from "../components/RootContainer/RootContainer";
import InnerContainer from "../components/InnerContainer";

const HomeScreen = () => {
  return (
    <RootContainer>
      <InnerContainer>
        <Text>HOME</Text>
      </InnerContainer>
    </RootContainer>
  );
};

export default HomeScreen;

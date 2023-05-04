import React, { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleContext } from "../store/StyleContext";
import homeScreen_style from "../styles/HomeScreen.styles";

const HomeScreen = () => {
  const { switchTheme } = useContext(StyleContext);
  const styles = homeScreen_style(useContext(StyleContext));

  const RootContainer = ({ children }) => {
    const { isPhone } = useContext(StyleContext);
    const inset = useSafeAreaInsets();
    return (
      <View
        style={[
          styles.container,
          {
            paddingTop: isPhone ? inset.top : 20,
            paddingBottom: isPhone ? inset.bottom : 0,
          },
        ]}
      >
        {children}
      </View>
    );
  };

  return (
    // <View style={styles.container}>
    <RootContainer>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Hello</Text>
        <TouchableOpacity style={styles.themeBtn} onPress={switchTheme} />
      </View>
    </RootContainer>
    // </View>
  );
};

export default HomeScreen;

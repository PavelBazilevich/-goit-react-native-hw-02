import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayoutRootView={onLayoutRootView}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // fontFamily: "Roboto-Regular",
  },
});

import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const [isReady, setIsReady] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    console.log(`Email: ${email}, Login: ${login}, Password: ${password}`);
    setEmail("");
    setLogin("");
    setPassword("");
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/Fonts/Roboto-Medium.ttf"),
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../assets/Images/PhotoBG.jpg")}
          style={styles.imageBg}
        >
          <View style={styles.contentBox}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.avatarBox}>
                <View style={styles.avatarThumb}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.iconBtn}>
                    <Text style={styles.iconAdd}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                value={login}
                onChangeText={loginHandler}
                placeholder="Логин"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адрес электронной почты"
                style={styles.input}
              />
              <TextInput
                nativeID="password"
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />
              <Text style={styles.show}>Показать</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={onLogin}
              >
                <Text style={styles.titleBtn}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.footerTitle}>Уже есть аккаунт? Войти</Text>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    position: "relative",
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    padding: 10,
    marginBottom: 16,
  },
  show: {
    position: "relative",
    top: -50,
    left: 256,
    fontSize: 16,
    color: "#1b4371",
  },
  btn: {
    marginTop: 43,
    marginBottom: 16,
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    alignItems: "center",
  },
  titleBtn: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  title: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#212121",
    fontSize: 32,
    marginBottom: 33,
    marginTop: 92,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  contentBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  avatarBox: {
    position: "absolute",
    top: -60,
    left: "30%",
  },
  avatarThumb: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  iconBtn: {
    position: "relative",
    width: 25,
    height: 25,
  },
  iconAdd: {
    display: "flex",
    position: "absolute",
    top: 81,
    left: 109,
    fontSize: 37,
    color: "#FF6C00",
  },
  footerTitle: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    marginBottom: 78,
    fontSize: 16,
    textAlign: "center",
    color: "#1b4371",
  },
});

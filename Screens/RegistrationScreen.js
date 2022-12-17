import React, { useState } from "react";
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
} from "react-native";
// import styles from "./RegistrationStyles";

export default function RegistrationScreen() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (text) => setEmail(text);
  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    console.log(`Email: ${email}, Login: ${login}, Password: ${password}`);
    setEmail("");
    setLogin("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "photo-1536528087222-ef43dd3bb0f3.jpg" }}
          style={{ width: 375, height: 812 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
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
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
            />
            {/* <Button
            title={"Зарегистрироваться"}
            style={styles.btn}
            onPress={onLogin}
          /> */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={onLogin}
            >
              <Text style={styles.titleBtn}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
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

  btn: {
    marginTop: 43,
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
    textAlign: "center",
    color: "#212121",
    fontSize: 32,
    marginBottom: 33,
  },
});

import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../components/App/AppText.js";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../components/Screen.js";
import AppTextField from "../components/AppTextField.js";
import AppButton from "../components/AppButton.js";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import { userSchema } from "../data.js";
import { Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config.js";
import { useDispatch } from "react-redux";
import { saveToStore } from "../Utils/securestore.js";

const Login = ({ navigation }) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  // handlelogin
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (e) {
      console.log(e, "error");
      // saving error
    }
  };

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "user");
        storeUser(user);
        dispatch({ type: "SET_USER", payload: user });
      })
      .catch((error) => {
        console.log(error, "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Wrong email or password");
      });
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.postDetail}>
        <TouchableOpacity
          style={styles.chevron}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
        <AppText style={styles.text}>Login</AppText>
      </View>
      <Image
        source={require("../assets/login.png")}
        style={styles.image}
      ></Image>
      <View style={styles.loginForm}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={userSchema.login}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <AppTextField
                error={errors.email}
                title="Email"
                placeholder="Email Address"
                style={styles.input}
                onChangeText={handleChange("email")}
              />
              <AppTextField
                error={errors.password}
                title="Password"
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                onChangeText={handleChange("password")}
              />
              <AppButton title={"Login"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  loginForm: {
    // marginTop: 100,
    paddingHorizontal: 20,
  },
  chevron: {
    position: "absolute",
    left: 20,
    top: 50,
    transform: [{ translateY: -15 }],
    color: "white",
    // top: 10,
  },
  postDetail: {
    height: 100,
    backgroundColor: "#1977F3",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 300,
  },
  text: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default Login;

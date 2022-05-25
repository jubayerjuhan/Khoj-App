import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/App/AppText.js';
import AppButton from '../components/AppButton.js';
import Screen from '../components/Screen.js';

const AuthScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppText>AuthScreen</AppText>
      <View style={styles.buttons}>
        <AppButton style={styles.btn} title={"Login"} onPress={() => navigation.navigate("Login")} />
        <AppButton style={styles.btn} title={"Sign Up"} onPress={() => navigation.navigate("Signup")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    paddingHorizontal: 20,
    position: "absolute",
    width: "100%",
    bottom: 20,
  },
  btn: {
    marginBottom: 20,
    width: "100%",
  }
});

export default AuthScreen;
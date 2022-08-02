import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import AppText from "./App/AppText.js";

const AppTextField = ({
  title,
  defaultValue,
  name,
  error,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
      <TextInput
        defaultValue={defaultValue}
        style={[styles.input, style]}
        {...props}
      />
      {error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
  input: {
    backgroundColor: "#F1F1F1",
    height: 46,
    borderRadius: 6,
    paddingHorizontal: 16,
  },
  text: {
    color: "#6F7482",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 32,
    // marginBottom: 10,
    /* identical to box height, or 24px */
    letterSpacing: 0.01,
  },
});

export default AppTextField;

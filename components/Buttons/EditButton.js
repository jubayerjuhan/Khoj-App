import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../App/AppText.js";
import { Feather } from "@expo/vector-icons";
import { globalStyle } from "../../screens/globalstyle.js";
import { TouchableOpacity } from "react-native";

const EditButton = ({ style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Feather name="edit" size={23} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 65,
    width: 65,
    backgroundColor: globalStyle.color.primary,
  },
});

export default EditButton;

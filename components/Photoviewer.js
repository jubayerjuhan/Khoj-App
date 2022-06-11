import React from "react";
import { View, StyleSheet } from "react-native";
import PhotoView from "react-native-photo-view";
import { Image } from "react-native";

const Photoviewer = ({ ...otherProps }) => {
  return (
    <>
      <Image source={require("../assets/download.jpg")} {...otherProps} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Photoviewer;

import React from "react";
import { View, StyleSheet } from "react-native";
import PhotoView from "react-native-photo-view";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { globalStyle } from "../screens/globalstyle.js";
import ImageView from "react-native-image-view";
import AppText from "./App/AppText.js";

const Photoviewer = ({ open, setOpen, photo, ...otherProps }) => {
  const images = [
    {
      source: {
        uri: photo,
      },
      title: "Paris",
      width: 806,
      height: 720,
      useNativeDriver: true,
    },
  ];
  return (
    <View style={styles.container}>
      <ImageView
        onClose={() => setOpen(false)}
        images={images}
        imageIndex={0}
        isVisible={open}
        renderFooter={(currentImage) => <></>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Photoviewer;

import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import paperplaneloader from "../assets/lottiefiles/paperplaneloading.json";
import AppText from "./App/AppText.js";
import { Dimensions } from "react-native";

const PaperplaneLoader = ({ source }) => {
  return (
    <View style={styles.container}>
      <LottieView source={source || paperplaneloader} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.315)",

    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default PaperplaneLoader;

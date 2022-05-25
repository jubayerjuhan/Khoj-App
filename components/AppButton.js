import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AppText from './App/AppText.js';

const AppButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <AppText style={styles.text}>{title ? title : "Submit"}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1977F3',
    borderRadius: 6,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 23,
    color: '#fff',
  }
});

export default AppButton;
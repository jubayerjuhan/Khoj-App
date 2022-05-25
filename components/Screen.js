import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';


const Screen = ({ children, statusbarColor, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar style='light' backgroundColor={statusbarColor ? statusbarColor : "#1977F3"} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Screen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const AppText = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  return (
    <Text style={[{
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
    }, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default AppText;
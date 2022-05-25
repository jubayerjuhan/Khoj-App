import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login.js';
import Signup from '../../screens/Signup.js';
import AuthScreen from '../../screens/AuthScreen.js';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';


const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useSelector(state => state.user);


  return (
    <>
      {/* <AppLoading /> */}
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Authscreen" component={AuthScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default AppNavigator;
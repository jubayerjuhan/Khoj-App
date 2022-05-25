import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../../screens/Homepage.js';
import AppTabNavigator from './AppTabNavigator.js';
import AuthNavigator from '../Navigators/AuthNavigator.js';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch()


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e)
    }
  }
  const [loading, setLoading] = useState(true);
  console.log(loading, user)
  return (
    <>
      {loading && <AppLoading startAsync={() => {
        console.log('startAsync')
        getData().then((res) => {
          dispatch({ type: 'SET_USER', payload: res })
        })
        // 
      }} onError={() => { console.log(error) }} onFinish={() => setLoading(false)} />}

      {loading === false && <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {!user && <Stack.Screen name="Auth" component={AuthNavigator} />}
        <Stack.Screen name="Home" component={AppTabNavigator} />
      </Stack.Navigator>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default AppNavigator;
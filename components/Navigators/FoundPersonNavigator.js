import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../../screens/Homepage.js';
import AppTabNavigator from './AppTabNavigator.js';
import LostPerson from '../LostPerson.js';
import Postdetail from '../../screens/Postdetail.js';
import FoundPerson from '../FoundPerson.js';

const FoundPersonNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Found Person" found component={FoundPerson} />
      <Stack.Screen name="Post Details" found
        children={() => <Postdetail found={true} />} />
    </Stack.Navigator>
  );
}


export default FoundPersonNavigator;
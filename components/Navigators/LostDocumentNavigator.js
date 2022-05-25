import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../../screens/Homepage.js';
import AppTabNavigator from './AppTabNavigator.js';
import LostPerson from '../LostPerson.js';
import Postdetail from '../../screens/Postdetail.js';
import FoundPerson from '../FoundPerson.js';
import client from '../../client.js';

const LostDocumentNavigator = () => {
  const [lostDocuments, setlostDocuments] = useState([])
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getDocuments()
  }, [])
  const getDocuments = async () => {
    const { data } = await client.get('/lostDocument');
    setlostDocuments(data?.lostDocuments);
  }

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Lost Document" children={() => <Homepage onRefresh={getDocuments} data={lostDocuments} />} />
      <Stack.Screen name="Post Details"
        component={Postdetail} />
    </Stack.Navigator>
  );
}


export default LostDocumentNavigator;
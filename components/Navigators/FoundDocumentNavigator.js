import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../../screens/Homepage.js';
import AppTabNavigator from './AppTabNavigator.js';
import LostPerson from '../LostPerson.js';
import Postdetail from '../../screens/Postdetail.js';
import FoundPerson from '../FoundPerson.js';
import client from '../../client.js';

const FoundDocument = () => {
  const [foundDocuments, setFoundDocuments] = useState([])
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getDocuments()
  }, [])
  const getDocuments = async () => {
    const { data } = await client.get('/foundDocument');
    setFoundDocuments(data.foundDocuments);
  }



  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Found Document" children={() => <Homepage found onRefresh={getDocuments} data={foundDocuments} />} />
      <Stack.Screen name="Post Details" children={() => <Postdetail found={true} />} />
    </Stack.Navigator>
  );
}


export default FoundDocument;
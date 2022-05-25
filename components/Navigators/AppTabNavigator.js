import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Homepage from '../../screens/Homepage.js';
import Postdetail from '../../screens/Postdetail.js';
import { Ionicons } from '@expo/vector-icons';
import LostPersonNavigator from './LostPersonNavigator.js';
import FoundPersonNavigator from './FoundPersonNavigator.js';
import LostDocumentNavigator from './LostDocumentNavigator.js';
import FoundDocument from './FoundDocumentNavigator.js';
import AddListing from '../../screens/AddListing.js';


const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Lost Persons" component={LostPersonNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="find" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Found Persons" component={FoundPersonNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-circle-outline" size={30} color={color} />
        ),
      }} />
      <Tab.Screen name="Add Listing" component={AddListing} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.plus}>
            <AntDesign name="pluscircleo" size={size} color={color} />
          </View>
        ),
      }} />
      <Tab.Screen name="Found Documents" component={FoundDocument} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-document-attach-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Lost Documents" component={LostDocumentNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="documents" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});

export default AppTabNavigator;
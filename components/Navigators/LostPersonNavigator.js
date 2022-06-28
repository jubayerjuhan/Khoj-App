import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../../screens/Homepage.js";
import AppTabNavigator from "./AppTabNavigator.js";
import LostPerson from "../LostPerson.js";
import Postdetail from "../../screens/Postdetail.js";
import SearchScreen from "../../screens/SearchScreen.js";
import Userscreen from "../../screens/Userscreen.js";

const LostPersonNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Lost Person" component={LostPerson} />
      <Stack.Screen name="Post Details" component={Postdetail} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="User" component={Userscreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LostPersonNavigator;

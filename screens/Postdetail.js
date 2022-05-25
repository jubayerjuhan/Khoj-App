import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListingCard from '../components/ListingCard.js';

import AppText from '../components/App/AppText.js';
import Screen from '../components/Screen.js';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const Postdetail = ({ found }) => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(found, 'found')
  return (
    <>
      <Screen>
        <View style={styles.postDetail}>
          <TouchableOpacity style={styles.chevron} onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={24} color="white" />
          </TouchableOpacity>
          <AppText style={styles.text}>Post Detail</AppText>
        </View>
        <ListingCard detail found={found} list={route?.params?.item} />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  postDetail: {
    height: 100,
    backgroundColor: '#1977F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    position: 'absolute',
    left: 20,
    top: 50,
    transform: [{ translateY: -15 }],
    color: 'white',
    // top: 10,
  },
  text: {
    fontWeight: "700",
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
  }
});

export default Postdetail;
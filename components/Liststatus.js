import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AppText from './App/AppText.js';

const Liststatus = ({ found }) => {
  return (
    <View style={styles.container}>
      {!found ? <Feather name="search" size={16} color="#1977F3" /> : <View style={styles.greendot} />}
      <AppText style={styles.text}>{found ? "Found" : "Finding"}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  greendot: {
    width: 10,
    height: 10,
    marginVertical: 3,
    borderRadius: 5,
    backgroundColor: '#2ce02f',
    marginRight: 5,
  },
  container: {
    marginTop: 15,
    backgroundColor: "#D5E6FC",
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: "center",
    maxWidth: 100,
    borderRadius: 50,
  },
  text: {
    marginLeft: 5,
    color: "#1977F3",
    fontSize: 12,
    lineHeight: 14
  }
});

export default Liststatus;
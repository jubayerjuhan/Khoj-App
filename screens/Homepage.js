import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Screen from "../components/Screen.js";
import { Entypo } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import { globalStyle } from "./globalstyle.js";
import ListingCard from "../components/ListingCard.js";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Homepage = ({ data, onRefresh, found }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      {/*  */}
      <View>
        <FlatList
          refreshing={loading}
          onRefresh={() => onRefresh()}
          ListHeaderComponent={() => (
            <View style={styles.topContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Search"
              />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          style={{
            width: "100%",
            height: "100%",
          }}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Post Details", { item })}
              activeOpacity={1}
            >
              <ListingCard list={item} found={found} />
              {/* // <Text>Text</Text> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#D8D8D8',
  },
  topContainer: {
    height: 100,
    backgroundColor: globalStyle.color.primary,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default Homepage;

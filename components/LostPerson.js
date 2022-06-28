import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Screen from "../components/Screen.js";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingCard from "../components/ListingCard.js";
import { FlatList } from "react-native";
import { globalStyle } from "../screens/globalstyle.js";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import client from "../client.js";
import AppText from "./App/AppText.js";
import { ScrollView } from "react-native";
const LostPerson = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [lostPersons, setLostPersons] = useState([]);
  useEffect(() => {
    getLostPerson();
  }, []);

  const getLostPerson = async () => {
    setLoading(true);
    const response = await client.get("/lostperson");
    console.log(response, "response");
    setLostPersons(response.data?.lostPerson);
    setLoading(false);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <FontAwesome name="user-circle-o" size={30} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setKeyword(text)}
          onSubmitEditing={() =>
            navigation.navigate("Search", { keyword, type: "lostPerson" })
          }
          // defaultValue={keyword}
          placeholder="Search"
        />
      </View>
      <View>
        <FlatList
          refreshing={loading}
          onRefresh={getLostPerson}
          ListHeaderComponent={() => <></>}
          showsHorizontalScrollIndicator={false}
          style={[
            {
              width: "100%",
              height: "100%",
            },
            styles.list,
          ]}
          data={lostPersons}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Post Details", { item })}
              activeOpacity={1}
            >
              <ListingCard list={item} />
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
  list: {
    marginBottom: -200,
  },
  topContainer: {
    // position: 'absolute',
    // flexDirection: 'row',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 100,
    backgroundColor: globalStyle.color.primary,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  input: {
    // marginRight: 20,
    width: "88%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default LostPerson;

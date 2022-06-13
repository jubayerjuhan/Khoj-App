import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import AppText from "../components/App/AppText.js";
import { Entypo } from "@expo/vector-icons";
import Screen from "../components/Screen.js";
import { globalStyle } from "./globalstyle.js";
import search from "../actions/searchAction.js";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import ListingCard from "../components/ListingCard.js";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import PaperplaneLoader from "../components/PaperplaneLoader.js";
import searchLoader from "../assets/lottiefiles/searching.json";
const SearchScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [result, setResult] = useState([]);
  const { keyword, type, image } = route.params;
  console.log(keyword, type, image, "keyword");
  console.log(result, "result");
  useEffect(() => {
    find(keyword);
  }, []);

  const find = async () => {
    setLoading(true);
    if (image) {
      const res = await search.faceId(image);
      console.log(res, "resppps");
      if (!res.ok) return setLoading(false);
      if (res) {
        setResult([res]);
        setLoading(false);
      }
    } else {
      const res = await search[type](keyword);
      if (!res.ok) return setLoading(false);
      setResult(res.data.result, "result");
      setLoading(false);
    }
  };

  console.log(result);
  return (
    <Screen>
      {loading && <PaperplaneLoader source={searchLoader} />}
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.chevron}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
        <AppText style={styles.text}>Search Result</AppText>
      </View>
      <FlatList
        // refreshing={loading}
        // onRefresh={getLostPerson}
        ListHeaderComponent={() => <></>}
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
        data={result}
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
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  chevron: {
    position: "absolute",
    left: 20,
    top: 50,
    transform: [{ translateY: -15 }],
    color: "white",
    // top: 10,
  },
  topContainer: {
    // flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    height: 100,
    backgroundColor: globalStyle.color.primary,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default SearchScreen;

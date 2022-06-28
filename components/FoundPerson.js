import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Screen from "../components/Screen.js";
import { Entypo } from "@expo/vector-icons";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import search from "../actions/searchAction.js";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingCard from "../components/ListingCard.js";
import { FlatList } from "react-native";
import { globalStyle } from "../screens/globalstyle.js";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import client from "../client.js";
import axios from "axios";
const FoundPerson = ({ navigation, found }) => {
  const storage = getStorage();

  //
  const [keyword, setKeyword] = useState("");
  const [foundPersons, setFoundPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getFoundPerson();
  }, []);

  const getFoundPerson = async () => {
    const response = await client.get("/foundPerson");
    setFoundPersons(response.data.foundPersons);
  };

  // getImage
  const getImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status === "granted") {
      // open image browser
      pickImage();
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === "granted") {
        pickImage();
      }
    }
  };

  // pick image
  const pickImage = async () => {
    const imageResponse = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const image = await FileSystem.readAsStringAsync(imageResponse.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // console.log(image, 'image')
    navigation.navigate("Search", { type: "image", image });
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          onChangeText={(text) => setKeyword(text)}
          onSubmitEditing={() =>
            navigation.navigate("Search", { keyword, type: "foundPerson" })
          }
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Search"
          // keyboardType="numeric"
        />
        <TouchableOpacity onPress={getImage}>
          <Feather name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          refreshing={loading}
          onRefresh={getFoundPerson}
          ListHeaderComponent={() => <></>}
          showsHorizontalScrollIndicator={false}
          style={[
            {
              width: "100%",
              height: "100%",
            },
            styles.list,
          ]}
          data={foundPersons}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Post Details", { item })}
              activeOpacity={1}
            >
              <ListingCard list={item} found />
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
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    backgroundColor: globalStyle.color.primary,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  input: {
    marginRight: 20,
    width: "100%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default FoundPerson;

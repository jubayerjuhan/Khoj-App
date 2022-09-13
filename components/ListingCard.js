import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import FindingSvg from "../assets/svg/finding.js";
import AppText from "./App/AppText.js";
import Liststatus from "./Liststatus.js";
import UserAvatar from "react-native-user-avatar";
import ImageView from "react-native-image-viewing";
import Photoviewer from "./Photoviewer.js";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListingCard = ({
  open: imagePopup,
  setOpen: setImagePopUp,
  detail,
  list,
  found,
}) => {
  const navigation = useNavigation();
  console.log(list);
  const keyFinder = {
    name: "Name",
    gdNo: "GD No",
    relation: "Relation",
    address: "Address",
    phone: "Phone",
    email: "Email",
    description: "Description",
    returnAddress: "Return Address",
    nidNo: "NID No",
    documentType: "Document Type",
  };

  const deletedKey = {
    _id: "id",
    photo: "Name",
    caption: "caption",
    __v: "__v",
    createdAt: "Created At",
    user: "user",
  };
  const fields = [];
  for (let key in list) {
    if (deletedKey[key]) {
      continue;
    }
    fields.push({
      key: keyFinder[key] ? keyFinder[key] : key,
      value: list[key],
    });
  }

  // handle image press
  const handleImagePress = () => {
    setImagePopUp(true);
  };
  return (
    <>
      <View style={styles.container}>
        {/* {detail && <ImageView
        images={[{uri:list?.photo}]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />} */}
        <ScrollView
          style={{ marginBottom: detail ? 168 : 0 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            {/* <Image
            style={styles.image}
            source={require('../assets/download.jpg')}
          /> */}
            <UserAvatar
              size={50}
              style={styles.image}
              name={list?.user?.displayName || "User Name"}
            />

            <View style={styles.name}>
              <AppText style={styles.title}>
                {list?.user?.displayName || "User Name"}
              </AppText>
              <AppText style={styles.subtitle}>16 Min Ago</AppText>
            </View>
          </View>
          <View style={styles.caption}>
            <AppText style={styles.captionText}>{list?.caption}</AppText>
          </View>
          {detail ? (
            <TouchableWithoutFeedback onPress={handleImagePress}>
              <Image style={styles.postImage} source={{ uri: list?.photo }} />
            </TouchableWithoutFeedback>
          ) : (
            <Image style={styles.postImage} source={{ uri: list?.photo }} />
          )}
          <Liststatus found={list?.found} />
          {detail && (
            <View style={styles.listDetail}>
              {fields.map((item, index) => {
                if (item.key === "Phone") item.value = "+880" + item.value;
                return (
                  <View style={styles.field} key={index}>
                    <AppText style={styles.title}>{item?.key}</AppText>
                    <AppText style={styles.description}>{item?.value}</AppText>
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    padding: 14,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
  },
  image: {
    marginRight: 15,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 24,
    color: "#77838F",
  },
  caption: {
    paddingVertical: 15,
  },
  captionText: {
    fontSize: 14,
    lineHeight: 24,
    color: "#77838F",
  },
  postImage: {
    height: 193,
    width: "100%",
    borderRadius: 10,
  },
  listDetail: {
    marginTop: 25,
  },
  field: {
    marginBottom: 18,
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height */
    letterSpacing: 1,
    color: "#77838F",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height */
    letterSpacing: 1,
    color: "black",
  },
});

export default ListingCard;

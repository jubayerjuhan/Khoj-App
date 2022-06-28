import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../components/App/AppText.js";
import Screen from "../components/Screen.js";
import { globalStyle } from "./globalstyle.js";
import UserAvatar from "react-native-user-avatar";

const Userscreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  const fields = [
    { name: "User Name", value: user?.providerData[0]?.displayName },
    { name: "Email", value: user?.providerData[0]?.email },
  ];
  return (
    <Screen>
      <View style={styles.topbar}>
        <AppText style={styles.title}>User</AppText>
      </View>
      <View>
        <View style={styles.dpWrapper}>
          {/* <Image
            source={{ uri: "https://picsum.photos/400" }}
            style={styles.dp}
          /> */}
          <UserAvatar
            size={100}
            style={styles.image}
            name={user?.providerData[0]?.displayName}
          />
        </View>
        <View style={styles.userInfoForm}>
          {fields.map((field, key) => (
            <View style={styles.formRows}>
              <AppText style={styles.userInfoTitles}>{field.name}</AppText>
              <AppText style={styles.userInfoValues}>{field.value}</AppText>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyle.color.primary,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  dpWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  dp: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  userInfoForm: {
    padding: 30,
    paddingHorizontal: 40,
  },
  formRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  userInfoTitles: {
    fontSize: 16,
    color: "#77838F",
  },
  userInfoValues: {
    fontSize: 16,
    color: "#212122",
  },
});

export default Userscreen;

import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../components/App/AppText.js";
import Screen from "../components/Screen.js";
import { globalStyle } from "./globalstyle.js";
import UserAvatar from "react-native-user-avatar";
import client from "../client.js";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { changeDp } from "../api/storeUser.js";
import EditButton from "../components/Buttons/EditButton.js";
import EditUserModal from "../components/Modals/EditUserModal.js";
import moment from "moment";
const Userscreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [addUserInfo, setAddUserInfo] = useState({});
  useEffect(() => {
    if (user) {
      getAdditionalUserInfo(user.email);
    }
  }, []);

  console.log(addUserInfo, "addUserInfo");

  const getAdditionalUserInfo = async (email) => {
    const { data } = await client.post("/me", { email });
    console.log(data, "datagot");
    setAddUserInfo(data?.user);
  };
  const fields = [
    { name: "User Name", value: addUserInfo?.name },
    { name: "Email", value: addUserInfo?.email },
    { name: "Blood Group", value: addUserInfo?.blood },
    { name: "Address", value: addUserInfo?.address },
    {
      name: "Date Of Birth",
      fieldName: "dateOfBirth",
      value: moment(addUserInfo?.dateOfBirth).format("DD-MM-YYYY"),
    },
    { name: "Phone", value: addUserInfo?.phone },
  ];

  const pickImage = async () => {
    const imageResponse = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const res = await FileSystem.readAsStringAsync(imageResponse.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // setFieldValue("image", res);
    const image = "data:image/png;base64," + res;
    changeDp(image, addUserInfo?.email);
  };

  const handleImageEditPress = async () => {
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

  const handleEditButton = () => {};
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
          <TouchableOpacity onPress={handleImageEditPress}>
            {addUserInfo?.profilePicture ? (
              <Image
                source={{ uri: addUserInfo?.profilePicture }}
                style={styles.dp}
              />
            ) : (
              <UserAvatar
                size={100}
                style={styles.image}
                name={addUserInfo?.name}
              />
            )}
          </TouchableOpacity>
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
      {/* edit button of user */}
      <EditButton
        onPress={() => setModalVisible(true)}
        style={styles.editButton}
      />
      <EditUserModal
        userInfo={addUserInfo}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
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
  editButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  dp: {
    width: 100,
    height: 100,
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

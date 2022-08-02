import React, { useEffect, useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../App/AppText.js";
import AppTextField from "../../components/AppTextField.js";
import { globalStyle } from "../../screens/globalstyle.js";
import AppButton from "../../components/AppButton.js";
import client from "../../client.js";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-datepicker";
import moment from "moment";

const EditUserModal = ({ userInfo, visible, setVisible }) => {
  const [updatedUser, setUpdatedUser] = useState({});
  const [date, setDate] = useState(moment().format());
  console.log(date, "date");
  const fields = [
    { name: "User Name", fieldName: "name", value: userInfo?.name },
    { name: "Blood Group", fieldName: "blood", value: userInfo?.blood },
    { name: "Address", fieldName: "address", value: userInfo?.address },
    { name: "Phone", fieldName: "phone", value: userInfo?.phone },
    {
      name: "Date Of Birth",
      fieldName: "dateOfBirth",
      value: userInfo?.dateOfBirth,
    },
  ];

  const handleSubmitEdit = async () => {
    console.log(userInfo.phone, "updatedUser");
    const isUpdated = Object.keys(updatedUser).length === 0;
    if (isUpdated) return alert("Nothing Edited Yet");

    const { data } = await client.put("/updateUser", {
      ...updatedUser,
      email: userInfo?.email,
    });
    if (data.success) {
      alert("Updated Successfully");
      setVisible(false);
    }
  };
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.times}
          onPress={() => setVisible(false)}
        >
          <FontAwesome
            name="times"
            size={24}
            color={globalStyle.color.primary}
          />
        </TouchableOpacity>
        <AppText style={styles.title}>Edit User</AppText>
        {fields.map((field, key) => {
          if (field.fieldName === "dateOfBirth") return;
          return (
            <AppTextField
              onChangeText={(text) =>
                setUpdatedUser({ ...updatedUser, [field.fieldName]: text })
              }
              defaultValue={`${field.value}`}
              key={key}
              title={field.name}
              name={"Hello"}
            />
          );
        })}
        <View style={styles.datepicker}>
          <AppText style={{ color: "#6F7482" }}>Date Of Birth</AppText>
          <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            onDateChange={(date) => {
              setDate(date);
              setUpdatedUser({ ...updatedUser, dateOfBirth: date });
            }}
          />
        </View>
        <AppButton onPress={handleSubmitEdit} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  datePickerStyle: {
    width: "100%",
    paddingVertical: 10,
    paddingBottom: 20,
  },
  times: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: globalStyle.color.primary,
  },
});

export default EditUserModal;

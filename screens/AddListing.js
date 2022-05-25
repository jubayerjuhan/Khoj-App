import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context'


import AppText from '../components/App/AppText.js';
import { StatusBar } from 'expo-status-bar';
import Screen from '../components/Screen.js';
import AppTextField from '../components/AppTextField.js';
import AppButton from '../components/AppButton.js';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Picker } from 'react-native';
import PickerComponent from '../components/PickerComponent.js';
import { documentType, listing, listingType, validationSchemas } from '../data.js';
import { Formik, useFormikContext } from 'formik';
import { useState } from 'react';
import { globalStyle } from './globalstyle.js';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import actions from '../actions/addListingActions.js';
import { useDispatch, useSelector } from 'react-redux';


const AddListing = ({ navigation }) => {
  const [docType, setDocumentType] = useState(documentType[0].value)
  const { success, error, errorMessage } = useSelector(state => state.addListing);
  const dispatch = useDispatch();
  // const { setFieldValue } = useFormikContext();
  const [selectedListing, setSelectedListing] = useState(listingType[0].value);
  const [selectedImage, setSelectedImage] = useState("");
  // getImage
  const getImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync()
    if (status === "granted") {
      // open image browser
      pickImage()
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status === "granted") {
        pickImage()
      }
    }
  }




  const pickImage = async () => {
    const imageResponse = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const res = await FileSystem.readAsStringAsync(imageResponse.uri,
      { encoding: FileSystem.EncodingType.Base64 })
    // setFieldValue("image", res);
    setSelectedImage("data:image/png;base64," + res)
  }



  // post the listing through api
  const postListing = async (values) => {
    values.photo = selectedImage;
    values.documentType = docType;
    if (!values.photo) {
      return alert("Please select a photo");
    }
    // console.log(values.caption, 'values')
    dispatch(actions[selectedListing](values));
  }


  // handling success and error
  if (success) {
    alert('Listing added successfully');
    dispatch({ type: 'CLEAR_SUCCESS' });
  }
  if (error) {
    alert(errorMessage);
    dispatch({ type: 'CLEAR_ERROR' });
  }

  return (
    <Screen style={{
      backgroundColor: '#FFFFFF',
    }} >

      <View style={styles.postDetail}>
        <TouchableOpacity style={styles.chevron} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
        <AppText style={styles.text}>Add Post</AppText>
      </View>
      <View style={styles.loginForm}>
        <Formik
          validationSchema={validationSchemas[selectedListing]}
          initialValues={{ photo: selectedImage ? selectedImage : "" }}
          onSubmit={values => postListing(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setErrors }) => {
            console.log(errors);
            return (
              <FlatList
                ListHeaderComponent={() => (
                  <PickerComponent title={'Listing Type'} selectedListing={selectedListing} data={listingType} onChange={(item) => {
                    setSelectedListing(item)
                    setErrors({})
                  }} />
                )}
                ListFooterComponent={() => (
                  <>
                    <View style={styles.imageSection}>
                      <TouchableOpacity style={styles.imagePicker} onPress={getImage}>
                        <Entypo name="camera" size={30} color={globalStyle.color.primary} style={styles.icon} />
                      </TouchableOpacity>
                      {selectedImage ? <Image source={{ uri: selectedImage }} style={styles.imagePicker} /> : null}
                    </View>
                    {/* {errors.photo ? <AppText style={styles.error}>{errors.photo}</AppText> : null} */}
                    <AppButton
                      onPress={handleSubmit}
                      title="Add Listing"
                      style={styles.button}
                    />
                  </>
                )}
                ListFooterComponentStyle={{
                  marginBottom: 20,
                }}
                style={styles.list}
                data={listing[selectedListing].fields}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  // console.log(item);
                  if (item.type === 'select') {
                    return (
                      <PickerComponent title={item.placeholder} data={documentType} onChange={(item) => {
                        setDocumentType(item)
                        // console.log('changed', item);
                      }} />
                    )
                  }
                  return (
                    <AppTextField
                      value={values[item.name]}
                      error={errors[item.name]}
                      onChangeText={handleChange(item.name)}
                      title={item.placeholder}
                      placeholder={item.placeholder}
                      style={styles.input}
                    />
                  )
                }} />
            )
          }}
        </Formik>
      </View>
    </Screen >
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
  },
  loginForm: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 200,
  },
  imageSection: {
    flexDirection: 'row',
  },
  chevron: {
    position: 'absolute',
    left: 20,
    top: 50,
    transform: [{ translateY: -15 }],
    color: 'white',
    // top: 10,
  },
  postDetail: {
    height: 100,
    backgroundColor: '#1977F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 300,
  },
  text: {
    fontWeight: "700",
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
  },
  imagePicker: {
    height: 100,
    width: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#F1F1F1',
    marginRight: 20,
  }
});

export default AddListing;
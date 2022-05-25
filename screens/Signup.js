import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context'
import AppText from '../components/App/AppText.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Screen from '../components/Screen.js';
import AppTextField from '../components/AppTextField.js';
import AppButton from '../components/AppButton.js';
import { Image, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseConfig } from '../firebase-config.js';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { authField, userSchema } from '../data.js';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authFirebase } from '../firebase-config.js';


const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    initializeApp(firebaseConfig)
  }, [])
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  const auth = getAuth();


  // store user
  const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value));
    } catch (e) {
      console.log(e, 'error')
      // saving error
    }
  }

  // handle sign up
  const handleSignup = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        storeUser(user);
        dispatch({ type: 'SET_USER', payload: user });

        // creates user profile
        // updating user profile name

        updateProfile(auth.currentUser, {
          displayName: values.name, //user profile name
        }).then((res) => {

        }).catch((error) => {
          console.log(error)

        });
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <Screen style={styles.container}>
      <View style={styles.postDetail}>
        <TouchableOpacity style={styles.chevron} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
        <AppText style={styles.text}>Sign Up</AppText>
      </View>
      {!keyboardStatus ? <Image source={require('../assets/signup.png')} style={styles.image}></Image> : null}
      <View style={styles.loginForm}>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          validationSchema={userSchema.signup}
          onSubmit={values => handleSignup(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <KeyboardAvoidingView
              behavior="padding"
              enabled
              style={{}}
            >
              <FlatList
                style={{
                  marginBottom: 200,
                }}
                data={authField.signup.fields}
                renderItem={({ item }) => {
                  if (item.name === "password") {
                    return (
                      <AppTextField
                        title={item.placeholder}
                        name={item.name}
                        error={errors[item.name]}
                        style={styles.input}
                        onChangeText={handleChange(item.name)}
                        onBlur={handleBlur(item.name)}
                        secureTextEntry={true}
                      />
                    )
                  } else {
                    return (
                      <AppTextField
                        title={item.placeholder}
                        name={item.name}
                        error={errors[item.name]}
                        style={styles.input}
                        onChangeText={handleChange(item.name)}
                        onBlur={handleBlur(item.name)}
                      />
                    )
                  }
                }}
                ListFooterComponent={() => (
                  <AppButton
                    title="Sign Up"
                    style={styles.button}
                    onPress={handleSubmit}
                  />
                )}
              />
            </KeyboardAvoidingView>

            // <AppTextField
            //   title="Name"
            //   placeholder="Full Name"
            //   style={styles.input}
            //   error={errors.name}
            //   onChangeText={handleChange('name')}
            // />
            // <AppTextField
            //   onChangeText={handleChange('email')}
            //   error={errors.email}
            //   title="Email"
            //   placeholder="Email Address"
            //   style={styles.input}
            // />
            // <AppTextField
            //   onChangeText={handleChange('password')}
            //   error={errors.password}
            //   title="Password"
            //   placeholder="Password"
            //   secureTextEntry={true}
            //   style={styles.input}
            // />
            // <AppButton onPress={handleSubmit} />

          )}
        </Formik>

      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  loginForm: {
    // marginTop: 100,
    paddingHorizontal: 20,
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
  }
});

export default Signup;
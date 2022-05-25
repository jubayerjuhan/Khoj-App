import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStore = async (key, value) => {
  try {
    const response = await AsyncStorage.setItem("Hello", JSON.stringify({ name: "John" }));
    console.log(response, 'response');
  } catch (e) {
    console.log(e);
  }
}

export const getFromStore = async (key) => {
  try {
    const value = await AsyncStorage.getItem("hello");
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
  }
}


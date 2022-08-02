import { create } from "apisauce";
import AsyncStorage from "@react-native-async-storage/async-storage";

const client = create({
  baseURL: "http://192.168.0.107:4000/api/v1",
  // baseURL: "https://khojapp.herokuapp.com/api/v1",
  timeout: 10000,
});

client.addAsyncRequestTransform(async (request) => {
  const user = JSON.parse(await AsyncStorage.getItem("user"));
  request.headers[
    "Authorization"
  ] = `Bearer ${user?.stsTokenManager?.accessToken}`;
  request.headers["Uid"] = user?.uid;
});

export default client;

import client from "../client.js";

export const storeUserInfoToDB = async (user) => {
  const userData = await client.post("/storeUser", user);
  console.log(userData, "userData");
};

export const changeDp = async (photo, email) => {
  console.log("hello");
  try {
    const userData = await client.put("/updatedp", {
      profilePicture: photo,
      email,
    });
    alert("Profile Picture Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};

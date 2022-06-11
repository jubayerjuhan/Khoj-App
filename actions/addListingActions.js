import client from "../client.js";
import axios from "axios";

const addFoundPerson = (values) => async (dispatch) => {
  let form = new FormData();
  form.append("name", values.name);
  form.append("phone", values.phone);
  form.append("address", values.address);
  form.append("photo", values.photo);
  form.append("caption", values.caption);

  dispatch({ type: "ADD_LISTING_PENDING" });

  client.post("/foundPerson", form).then((res) => {
    console.log(res, "success");
    if (res.ok) {
      dispatch({ type: "ADD_LISTING_SUCCESS" });
      axios
        .post(
          "https://recognize-missing-person.herokuapp.com/find/",
          {
            url: res.data.foundPerson.photo,
            face: res.data.foundPerson._id,
          },
          { timeout: 100000 }
        )
        .then((res) => {})
        .catch((err) => {
          console.log("face err", err);
          alert("Listing Uploaded But Face Id Server Is Sleeping");
        });
      return res.data;
    } else {
      console.log(res, "error");
      dispatch({ type: "ADD_LISTING_FAILED", payload: response.data?.message });
    }
  });
};

const addFoundDocument = (values) => async (dispatch) => {
  let form = new FormData();
  for (const key in values) {
    form.append(key, values[key]);
  }

  dispatch({ type: "ADD_LISTING_PENDING" });

  const response = await client.post("/foundDocument", form);
  if (response.ok)
    return dispatch({
      type: "ADD_LISTING_SUCCESS",
      payload: response.data?.message,
    });

  dispatch({ type: "ADD_LISTING_FAILED" });
};

const addLostDocuments = (values) => async (dispatch) => {
  let form = new FormData();
  for (const key in values) {
    form.append(key, values[key]);
  }

  dispatch({ type: "ADD_LISTING_PENDING" });

  const response = await client.post("/lostDocument", form);

  if (!response.ok)
    return dispatch({
      type: "ADD_LISTING_FAILED",
      payload: response.data?.message,
    });
  dispatch({ type: "ADD_LISTING_SUCCESS" });
};

const addLostPerson = (values) => async (dispatch) => {
  let form = new FormData();
  for (const key in values) {
    form.append(key, values[key]);
  }

  dispatch({ type: "ADD_LISTING_PENDING" });

  const response = await client.post("/lostPerson", form);
  console.log(response.data);
  if (!response.ok)
    return dispatch({
      type: "ADD_LISTING_FAILED",
      payload: response.data?.message,
    });
  dispatch({ type: "ADD_LISTING_SUCCESS" });
};

const actions = {
  foundPerson: addFoundPerson,
  foundDocument: addFoundDocument,
  lostDocument: addLostDocuments,
  lostPerson: addLostPerson,
};

export default actions;

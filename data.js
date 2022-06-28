import * as Yup from "yup";

import { setLocale } from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

setLocale({
  // use constant translation keys for messages without values
  mixed: {
    default: "field_invalid",
  },
  // use functions to generate an error object that includes the value from the schema
  number: {
    min: ({ min }) => ({ key: "field_too_short", values: { min } }),
    max: ({ max }) => ({ key: "field_too_big", values: { max } }),
  },
});

export const listing = {
  lostPerson: {
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "address", type: "text", placeholder: "Address" },
      { name: "returnAddress", type: "text", placeholder: "Return Address" },
      { name: "phone", type: "text", placeholder: "Phone" },
      { name: "nidNo", type: "text", placeholder: "NID Number" },
      { name: "relation", type: "text", placeholder: "Relation" },
      { name: "gdNo", type: "text", placeholder: "GD Number" },
      { name: "caption", type: "text", placeholder: "Caption" },
    ],
  },
  lostDocument: {
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "documentType", type: "select", placeholder: "Document Type" },
      { name: "documentNumber", type: "text", placeholder: "Document Number" },
      { name: "address", type: "text", placeholder: "Address" },
      { name: "phone", type: "text", placeholder: "Phone" },
      { name: "nidNo", type: "text", placeholder: "NID Number" },
      { name: "gdNo", type: "text", placeholder: "GD Number" },
      { name: "caption", type: "text", placeholder: "Caption" },
    ],
  },
  foundPerson: {
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "address", type: "text", placeholder: "Address" },
      { name: "phone", type: "text", placeholder: "Phone" },
      { name: "caption", type: "text", placeholder: "Caption" },
    ],
  },
  foundDocument: {
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "documentType", type: "select", placeholder: "Document type" },
      { name: "address", type: "text", placeholder: "Address" },
      { name: "phone", type: "text", placeholder: "Phone" },
      { name: "caption", type: "text", placeholder: "Caption" },
    ],
  },
};

export const listingType = [
  { name: "Lost Person", value: "lostPerson" },
  { name: "Lost Document", value: "lostDocument" },
  { name: "Found Person", value: "foundPerson" },
  { name: "Found Document", value: "foundDocument" },
];

export const validationSchemas = {
  lostDocument: Yup.object().shape({
    name: Yup.string().required("Field Is Required"),
    // documentType: Yup.string().required("Field Is Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Field Is Required"),
    address: Yup.string().required("Field Is Required"),
    documentNumber: Yup.string().required("Field Is Required"),
    nidNo: Yup.number().required("Field Is Required"),
    gdNo: Yup.string().required("Field Is Required"),
    // photo: Yup.string().required("Field Is Required"),
  }),
  lostPerson: Yup.object().shape({
    // photo: Yup.string().required("Field Is Required"),
    name: Yup.string().required("Field Is Required"),
    address: Yup.string().required("Field Is Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Field Is Required"),

    address: Yup.string().required("Field Is Required"),
    returnAddress: Yup.string().required("Field Is Required"),
    nidNo: Yup.number().required("Field Is Required"),
    relation: Yup.string().required("Field Is Required"),
    gdNo: Yup.string().required("Field Is Required"),
  }),
  foundPerson: Yup.object().shape({
    // photo: Yup.string().required("Field Is Required"),
    name: Yup.string().required("Field Is Required"),
    address: Yup.string().required("Field Is Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Field Is Required"),
  }),
  foundDocument: Yup.object().shape({
    name: Yup.string().required("Field Is Required"),
    address: Yup.string().required("Field Is Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Field Is Required"),
  }),
};

export const userSchema = {
  login: Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Field Is Required"),
    password: Yup.string().required("Field Is Required"),
  }),
  signup: Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Field Is Required"),
    password: Yup.string().required("Field Is Required"),
    name: Yup.string().required("Field Is Required"),
  }),
};

export const authField = {
  login: {
    fields: [
      { name: "email", type: "text", placeholder: "Email" },
      { name: "password", type: "password", placeholder: "Password" },
    ],
  },
  signup: {
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "email", type: "text", placeholder: "Email" },
      { name: "password", type: "password", placeholder: "Password" },
    ],
  },
};

export const documentType = [
  { name: "Passport", value: "Passport" },
  { name: "NID", value: "NID" },
  { name: "Driving License", value: "Driving License" },
  { name: "Birth Certificate", value: "Birth Certificate" },
  { name: "Other", value: "Other" },
];

import mongoose from "mongoose";

const organizationschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  OrgName:{
    type: String,
    required: true,
  },
  contact1: {
    type: String,
    required: true,
  },
  contact2: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  municipality: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imagee: {
    type: String,
    required: true,
  },
});

const Organization = mongoose.model("Organization", organizationschema);

export default Organization;

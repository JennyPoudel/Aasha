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
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  orgweb: {
    type: String,
    required: true,
  },
  regno: {
    type: String,
    required: true,
  },
  doe: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  valid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  selectedProvince: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardnum: {
    type: String,
    required: true,
  },
  cardholder: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});
let Organization;

try {
  Organization = mongoose.model("Organization");
} catch (error) {
  Organization = mongoose.model("Organization", organizationschema);
}

export default Organization;

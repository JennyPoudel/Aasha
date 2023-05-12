import mongoose from "mongoose";

const individualSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullname:{
    type: String,
    required: true,
  },

  nationalID: {
    type: String,
    required: true,
  },
  // issuedate: {
  //   type: String,
  //   required: true,
  // },
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  // municipality: {
  //   type: String,
  //   required: true,
  // },
  // ward: {
  //   type: String,
  //   required: true,
  // },
  dob: {
    type: String,
    required: true,
  },
  // tempadd: {
  //   type: String,
  // },
  contact1: {
    type: String,
    required: true,
  },
  contact2: {
    type: String,
    required: true,
  },
  gender: {
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
  profile: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  valid: {
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
  selectedProvince: {
    type: String,
    required: true,
  },
  

});

let Individual;

try {
  Individual = mongoose.model("Individual");
} catch (error) {
  Individual = mongoose.model("Individual", individualSchema);
}

export default Individual;

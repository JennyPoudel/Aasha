import mongoose from "mongoose";

const individualSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName:{
    type: String,
    required: true,
  },
  middleName:{
    type: String,
  },
  lastName:{
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
  id: {
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
  // dob: {
  //   type: Date,
  //   required: true,
  // },
  image: {
    type: String,
    required: true,
  },
  imagee: {
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

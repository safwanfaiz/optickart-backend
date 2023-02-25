const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  ph_no: Number,
  email: String,
  password: String,
},{versionKey:false},);

const signupModel = mongoose.model("signup", signupSchema);

module.exports = { signupModel };
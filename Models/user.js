const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const userschema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  ip_address: Number,
  gender: String
});

// Model
const usermodel = mongoose.model('usermodel', userschema);
module.exports = {usermodel};

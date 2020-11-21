const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    required: true,
  },

  cellphone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  birthday: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

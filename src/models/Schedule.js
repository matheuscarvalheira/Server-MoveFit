const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  email: {
    type: String,
    required: true,
    ref: "user",
  },

  name: {
    type: String,
    required: true,
    ref: "user",
  },

  scheduleDate: {
    type: String,
    required: true,
  },
});

const Schedule = mongoose.model("Schedule", UserSchema);

module.exports = Schedule;

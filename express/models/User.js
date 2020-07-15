const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userFavourite: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

module.exports = User = mongoose.model("users", UserSchema);

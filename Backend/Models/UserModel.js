const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  userPassword: { type: String },
});

const UserModels = mongoose.model("user_collections", UserModel)
module.exports = UserModels
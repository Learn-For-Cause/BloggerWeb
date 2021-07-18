import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserModel = new Schema({
  userName: { type: String },
  userEmail: { type: String },
  userPassword: { type: String },
});

export default mongoose.model("user_collections", UserModel);

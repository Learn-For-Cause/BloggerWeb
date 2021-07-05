import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserModel = new Schema({
    userName: { type: String },
    userEmail: { type: String },
    userUsername: { type: String },
    userPassword: { type: String },
});

export default mongoose.model("user_collection", UserModel);
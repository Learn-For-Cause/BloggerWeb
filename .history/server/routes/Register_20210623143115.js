import UserModel from "../models/UserSchema.js";

const AddUser = async (req, res) => {
    const { userName, userEmail, userUsername, userPassword } = req.body;

};

export default AddUser;
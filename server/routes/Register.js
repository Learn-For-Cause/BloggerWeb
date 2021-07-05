import express, { json } from "express";
import UserModel from "../models/UserSchema.js";
import bcrypt from "bcrypt"
const app = express();
app.use(json());
const AddUser = async (req, res) => {
    const { userName, userEmail, userUsername, userPassword } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.userPassword,10)
    // console.log(hashedPassword)
    const redData = new UserModel({
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        userUsername:req.body.userUsername,
        userPassword:hashedPassword,
    });
    // res.send(req.body)
    try{
        const rData = await redData.save();
        res.json(rData)
        console.log("Data Registered")
    
    }
    catch(err){
        res.json({message:"ERRRO"})
    }
};

export default AddUser;
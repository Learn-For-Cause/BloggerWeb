import express, { json } from "express";
import UserModel from "../models/UserSchema.js";
import bcrypt from "bcrypt"
const app = express();
app.use(json());
// const users=[
//     {
//         userEmail:"bc@gmail.com",
//         userPassword:"$2b$10$IfENkGn3z/.PaoWMh4qJs.QtC1gL7Fbumn4gxRc.zAQ0.FKNfxGtW"
//     }
// ]
const LoginUser = async(req, res) => {
    const { userEmail, userPassword } = req.body;
    // res.send(req.body)
    //user => user.userEmail = req.body.userEmail
    console.log(UserModel)
    const user = UserModel.find({userEmail:req.body.userEmail})
    console.log(user)
    if(user == null)
    {
         return res.status(400).send('Cannot find user')
    }
    // return res.status(400).send('user found')
    try{
        if (await bcrypt.compare(req.body.userPassword,user.userPassword)) {
            res.send('Success')
            console.log('suc')
        }
        else{
            res.send('Inncorrect password')
            console.log('inc')
        }
    }
    catch{
        res.status(500).send()
    }
};

export default LoginUser;


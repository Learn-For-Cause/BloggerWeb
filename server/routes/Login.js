import express, { json } from "express";
import UserModel from "../models/UserSchema.js";
import bcrypt from "bcrypt"
const app = express();
app.use(json());
//Trial
// const users=[
//     {
//         userEmail:"bc@gmail.com",
//         userPassword:"$2b$10$IfENkGn3z/.PaoWMh4qJs.QtC1gL7Fbumn4gxRc.zAQ0.FKNfxGtW"
//     }
// ]
const LoginUser = async(req, res) => {
    const { userEmail, userPassword } = req.body;
  UserModel.findOne(
    {
      userEmail: userEmail,
    },
    async(err, docs) => {
      if (err) console.log(err);
      else {
        if (docs) {
          console.log(userPassword)
          console.log(docs.userPassword)
          if (await bcrypt.compare(req.body.userPassword,docs.userPassword)===true) {
            res.send('Succesfully loged In');
          } else res.send("WRONG-PASSWORD");
        } else {
          res.send("UNREGISTERED");
        }
      }
    }
  );
};

export default LoginUser;


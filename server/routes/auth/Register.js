import UserModel from "../../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

var add_minutes = function (dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
};

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 7);

  UserModel.findOne({ userEmail: email }, (err, docs) => {
    if (err) console.log(err);
    else {
      if (docs) {
        // Account already exists
        res.send({
          code: 422,
          userResponse: "Account Exists",
        });
      } else {
        // Create account
        new UserModel({
          userName: name,
          userEmail: email,
          userPassword: hashPassword,
        })
          .save()
          .then(() => {
            UserModel.findOne(
              {
                userEmail: email,
              },
              (err, docs) => {
                if (err) console.log(err);
                else {
                  if (docs) {
                    const token = jwt.sign(
                      { email: docs["userEmail"], id: docs["_id"] },
                      "kamiwajinseides",
                      { expiresIn: "1h" }
                    );

                    let now = new Date();
                    // Proceed to login
                    res.send({
                      code: 200,
                      response: docs,
                      expiresIn: add_minutes(now, 60),
                      signedToken: token,
                      userResponse: "Proceed",
                    });
                  } else {
                    // Register first
                    res.send({
                      code: 401,
                      userResponse: "Unregistered",
                    });
                  }
                }
              }
            );
          })
          .catch((err) => {
            console.log(err);
            res.send({
              code: 400,
              response: err,
              userResponse: "Oops",
            });
          });
      }
    }
  });
};

export default Register;

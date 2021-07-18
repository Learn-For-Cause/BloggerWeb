import UserModel from "../../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

var add_minutes = function (dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
};

const Login = (req, res) => {
  const { email, password } = req.body;
  // Check if email exists
  UserModel.findOne(
    {
      userEmail: email,
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        if (docs) {
          // Compare passwords
          if (bcrypt.compare(password, docs["userPassword"])) {
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
          } else
            res.send({
              code: 401,
              userResponse: "Wrong Password",
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
};

export default Login;

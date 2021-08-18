const express = require("express")
const App = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require("./Models/UserModel.js")


const dburi = "mongodb+srv://kevkanae:crysis123@blogcluster.utcvb.mongodb.net/webx?retryWrites=true&w=majority"

App.use(express.json())
App.use(cors())

try {
    mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        App.listen(PORT)
        console.log("Connected to database")
    })
    console.log("MongoDB Connection: ✔");
} catch (err) {
    console.log(err);
    throw err;
}

// Test
App.get('/',(req,res)=>{
    res.send('Yeah it works')
})

// LLogin
var add_minutes = function (dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
  };

App.post('/login',(req,res)=>{
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
})


// Register
App.post('/register',async(req,res)=>{
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
})



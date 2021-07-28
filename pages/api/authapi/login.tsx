// register left
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../utils/mongodb";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


var add_minutes = function (dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
  };

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    const {method} = req;
    const { db } = await connectToDatabase();
    const { email, password } = req.body;
    switch(method){
        case 'POST':
            {
                // table name
                try{
                    await db
                    .collection("user_collections") 
                    .findOne({
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
                      })
                    .sort({ metacritic: -1 })
                    .toArray();

                    res.status(200).json({success:true})

                }catch(err){
                    res.status(400).json({success:false})
                }
            }
            break;
    }
}
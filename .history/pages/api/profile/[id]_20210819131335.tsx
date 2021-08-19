import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../utils/mongodb";
const mongoose = require("mongoose")

// using username
export default async(req: NextApiRequest, res: NextApiResponse)=>{
    const { db } = await connectToDatabase();
    const { id } = req.query;
    var iiid = mongoose.Types.ObjectId(id)
    const {
        // query:username,
        method
    } = req;
    // res.send(id)
    switch(method){
        case 'GET':{
            try{
                const profileData1 = await  db
                .collection("profile")
                // .findOne({_id:iiid})
                .findOne({
                    _id:iiid,
                    'profileData':{
                        $elemMatch:{'password':"1234"}
                    }
                })
                // .findById(id)

                if(!profileData1){
                    return res.status(400).json({success:"not found"})
                }
                res.status(200).json({success:true,data:profileData1})

            }catch(err){
                return res.status(400).json({success:false})
            }
        }break;
        case 'PUT':{
            try{
                var profiledata = req.body;
                profiledata = JSON.parse(profiledata);
                const profileEdit = await db
                .collection("profile")
                .findOneAndUpdate({_id:iiid},{$set:{ profiledata}},{
                    new:true,
                    runValidators:true
                })

                if(!profileEdit){
                    return res.status(400).json({success:false})
                }
                res.status(200).json({success:true,data:profileEdit});
            }
            catch(err){
                return res.status(400).json({success:false})
            }
        }break;
        case 'DELETE':{
            try{
                const deleteprofile = await db.collection("profile")
                .deleteOne({_id:iiid})

                if(!deleteprofile){
                    return res.status(400).json({success:false})
                }
                res.status(200).json({success:true,data:deleteprofile});
            }
            catch(err){
                return res.status(400).json({success:false})
            }
        }break;
        default:{
            return res.status(400).json({success:false});
        }break;
    }

}
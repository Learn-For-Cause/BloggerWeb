import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../utils/mongodb";
const mongoose = require("mongoose")

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
                const blogpost = await  db
                .collection("bloglist")
                .findOne({_id:iiid})
                // .findById(id)

                if(!blogpost){
                    return res.status(400).json({success:"not found"})
                }
                res.status(200).json({success:true,data:blogpost})

            }catch(err){
                return res.status(400).json({success:false})
            }
        }break;
        case 'PUT':{
            try{
                var blogsadd = req.body;
                blogsadd = JSON.parse(blogsadd);
                const blogedit = await db
                .collection("bloglist")
                .findOneAndUpdate({_id:iiid},{$set: {blogsadd}},{
                    new:true,
                    runValidators:true
                })

                if(!blogedit){
                    return res.status(400).json({success:false})
                }
                res.status(200).json({success:true,data:blogedit});
            }
            catch(err){
                return res.status(400).json({success:false})
            }
        }break;
        case 'DELETE':{
            try{
                const deleteblog = await db.collection("bloglist")
                .deleteOne({_id:iiid})

                if(!deleteblog){
                    return res.status(400).json({success:false})
                }
                res.status(200).json({success:true,data:deleteblog});
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
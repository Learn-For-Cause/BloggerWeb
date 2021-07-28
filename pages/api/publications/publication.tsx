import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../utils/mongodb";

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    const {method} = req;
    const { db } = await connectToDatabase();

    switch(method){
        case 'GET':
            {
                try{
                    const profile = await db
                    .collection("publication_lists")
                    .find({})
                    .sort({ metacritic: -1 })
                    .toArray();

                    res.status(200).json({success:true,data:profile})

                }catch(err){
                    res.status(400).json({success:false})
                }
            }
            break;
        case 'POST':{
            try{
                // res.send(req.body)
                var pubdata = req.body;
                pubdata = JSON.parse(pubdata)
                const addProfile = await db
                .collection("publication_lists")
                .insertOne({pubdata})
                res.status(201).json({success:true,data:addProfile})
            }
            catch(err){
                // error
                res.status(400).json({success:false})
            }
            break;
        }
        default:{
            res.status(400).json({success:"Error"})
        }break;
    }
}
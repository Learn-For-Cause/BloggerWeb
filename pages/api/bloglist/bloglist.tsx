import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../utils/mongodb";

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    const {method} = req;
    const { db } = await connectToDatabase();

    switch(method){
        case 'GET':
            {
                try{
                    const blogslist = await db
                    .collection("bloglist")
                    .find({})
                    .sort({ metacritic: -1 })
                    .toArray();

                    res.status(200).json({success:true,data:blogslist})

                }catch(err){
                    res.status(400).json({success:false})
                }
            }
            break;
        case 'POST':{
            try{
                // res.send(req.body)
                var blogsadd = req.body;
                blogsadd = JSON.parse(blogsadd)
                const addBlog = await db
                .collection("bloglist")
                .insertOne({blogsadd})
                res.status(201).json({success:true,data:addBlog})
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
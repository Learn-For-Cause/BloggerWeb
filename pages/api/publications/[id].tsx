import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";
const mongoose = require("mongoose");

// using username
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const { id } = req.query;
  var iiid = mongoose.Types.ObjectId(id);
  const {
    // query:username,
    method,
  } = req;
  // res.send(id)
  switch (method) {
    case "GET":
      {
        try {
          const publicationData = await db
            .collection("publication_lists")
            .findOne({ _id: iiid });
          // .findById(id)

          if (!publicationData) {
            return res.status(400).json({ success: "not found" });
          }
          res.status(200).json({ success: true, data: publicationData });
        } catch (err) {
          return res.status(400).json({ success: false });
        }
      }
      break;
    case "PUT":
      {
        try {
          var pubdata = req.body;
          pubdata = JSON.parse(pubdata);
          const publicationEdit = await db
            .collection("publication_lists")
            .findOneAndUpdate(
              { _id: iiid },
              { $set: { pubdata } },
              {
                new: true,
                runValidators: true,
              }
            );

          if (!publicationEdit) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: publicationEdit });
        } catch (err) {
          return res.status(400).json({ success: false });
        }
      }
      break;
    case "DELETE":
      {
        try {
          const deletepublication = await db
            .collection("publication_lists")
            .deleteOne({ _id: iiid });

          if (!deletepublication) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: deletepublication });
        } catch (err) {
          return res.status(400).json({ success: false });
        }
      }
      break;
    default:
      {
        return res.status(400).json({ success: false });
      }
      break;
  }
};

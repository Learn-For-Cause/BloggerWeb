// temporary
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../utils/mongodb";

export default async(req: NextApiRequest, res: NextApiResponse) => {
  // res.status(200).json({ name: 'John Doe' })
  const { db } = await connectToDatabase();
  const publication = await db
    .collection("publication_lists")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();
  res.json(publication);
}
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   res.status(200).json({ name: req.body.name})
// }
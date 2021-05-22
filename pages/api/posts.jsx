// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'
import { connectToDatabase } from '../../utils/db'


const handler = nc({
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`})
  }})
  .get(async (req, res) =>{
    let db = await connectToDatabase();
    let posts = await db.db
      .collection("Posts")
      .find({})
      .limit(20)
      .toArray();
    res.status(200).json(posts)
  })

export default handler;

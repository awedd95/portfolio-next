// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'

const handler = nc({
  onNoMatch(req, res){
    res.status(405).json({error: `Method ${req.method} Not Allowed`})
  }})
  .get(async (req, res) =>{
    res.send("Hello from the other side")
  })

export default handler;

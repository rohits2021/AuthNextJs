import { getSession } from "next-auth/react"

const handler = async (req,res) => {
  const session = await getSession({req});
  if(!session){
    return res.status(400).json({success:false,message: 'Unauthenticated, Please Login in!'})
  }else{
    return res.status(200).json({success:true,message: session})
  }
} 

export default handler;
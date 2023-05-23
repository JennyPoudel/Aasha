import connectMongo from '../../../connection/conn';
//import FormI from '../../model/formSchema'
import UsersL from '../../../model/login'
import mongoose from 'mongoose';
export default async function handler (req,res){
  if (req.method!== "GET"){
    res.status(405).send({msg:"Only GET allowed."});
    return;
  }
  try{
    await connectMongo();
    const User= await UsersL.find();
    res.status (200).send(User);

  }catch(err){
    console.log(err);
    res.status(400).send({err,msg:"someting went wrong"});
  }
}
// import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { getServerSession } from "next-auth/next"


// export async function handler(req, res) {
//   const session = await getServerSession(req, res, authOptions)

//   if (!session) {
//     res.status(401).json({ message: "You must be logged in." });
//     return;
//   }

//   return res.json({
//     message: 'Success',
//   })
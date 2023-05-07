import connectMongo from '../../../connection/conn';
import table from '../../../model/new'
import mongoose from 'mongoose';


import { getSession } from "next-auth/react"

  export default async function handler(req, res,session){

    mongoose.set("strictQuery", false);
    connectMongo().catch(error =>  res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){
    

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        // const session = await getSession({ req });
        // if (!session) {
        //   res.status(401).json({ error: 'Unauthorized' });
        //   return;
        // }
        
        const {
            
            FirstName,
            MiddleName,
            LastName,
            PhoneNo,
            DOB,
            Email,
            State,
            District,
            // user,
          
           
           
          } = req.body;
          const session = await getSession({ req });
        if (!session) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
        }
       const user = session.user._doc.id;
  
        console.log(req.body);

        

        
        table.create({FirstName,MiddleName,LastName,PhoneNo,DOB,Email,State,District,user}, function(err, data){
            if(err) return res.status(404).json({ err });
            return res.status(201).json({ status : true, user: data})
            
        })

    } else{
        return res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }
    

}
export async function getServerSideProps({ req }){
  const session = await getSession({ req })
  


  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  console.log(session.user.status);
  return {
    props: { session}
  }
}
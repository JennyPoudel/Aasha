// import connectMongo from '../../../connection/conn';
// import detailtable from '../../../model/details'
// import mongoose from 'mongoose';
// export default async function handler(req, res){
//   mongoose.set("strictQuery", false);
//    await connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

//   // only post method is accepted
//   if(req.method === 'POST'){

//       if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
//       const { = req.body;
//       console.log(req.body);

    

  
//       detailtable.create({FirstName,MiddleName,LastName,PhoneNo,DOB,Email,State,District}, function(err, data){
//           if(err) return res.status(404).json({ err });
//           return res.status(201).json({ status : true, user: data})
          
//       })

//   } else{
//      return  res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
//   }
  

// }
// //{FirstName,MiddleName,LastName,PhoneNo,DOB,Email,State,District}
// pages/api/user.js


import Detail  from '../../../model/details'
import connectMongo from '../../../connection/conn';
import mongoose from 'mongoose';
export default async function handler(req, res) {
  // Connect to the database
  
     await connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))
  
  // Handle POST requests
  if (req.method === 'POST') {
    try {
      // Create a new user object based on the request body
      const{FirstName,MiddleName,LastName,PhoneNo,DOB,Email,State,District} = req.body
       Detail.create(Json.stringify({ FirstName,MiddleName,LastName,PhoneNo,DOB,Email,State,District }));

      
      

      // Return a success response with the user details
      res.status(201).json({ success: true, user })
    } catch (error) {
      // Return an error response if there was a problem saving the user to the database
      res.status(500).json({ success: false, error: error.message })
    }
  } else {
    // Return an error response if the request method is not supported
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }
}

import connectMongo from '../../connection/conn';
import IND from '../../model/individual'
import mongoose from 'mongoose';

  export default async function handler(req, res){
    mongoose.set("strictQuery", false);
    connectMongo().catch(error =>  res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const {Title,FirstName,LastName,ProvinceNo,District,City,EmailAddress,PhoneNumber,FundraiserStory,ProfilePicture, SocialmediaLinks,ValidationDocuments} = req.body;
  
        console.log(req.body);

        IND.create({Title,FirstName,LastName,ProvinceNo,District,City,EmailAddress,PhoneNumber,FundraiserStory,ProfilePicture, SocialmediaLinks,ValidationDocuments}, function(err, data){
            if(err) return res.status(404).json({ err });
            return res.status(201).json({ status : true, user: data})
            
        })

    } else{
        return res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }
    

}

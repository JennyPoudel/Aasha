import { Schema, model, models } from 'mongoose';
//import FormI from 'model/formSchema'
const userSchemaL = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
       
            },
   password: String,
   
})

const UsersL = models.userL || model('userL', userSchemaL);

export default UsersL;


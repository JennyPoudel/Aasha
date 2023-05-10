import { Schema, model, models } from 'mongoose';
//import FormI from 'model/formSchema'
const userSchema = new Schema({
   username: String,
   password: String,
   
})

const Users = models.user || model('user', userSchema);

export default Users;


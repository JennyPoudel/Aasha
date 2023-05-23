
const mongoose = require('mongoose');


import { Schema, model, models } from 'mongoose';
//import FormI from 'model/formSchema'
const Detailtable = new Schema({
    FirstName: {
        type: String
    },
    MiddleName: {
        type: String
    },
    LastName: {
        type: String
    },
    PhoneNo: {
        type: String
    },
    DOB: {
        type: Date
    },
    Email: {
        type: String
    },
    State: {
        type: String
    },
    District: {
        type: String
    }
    
   
})

const Detail = models.Detail || model('Details', Detailtable);

export default Detail;


import Users from "model/schema"
const mongoose = require('mongoose');

const detail = mongoose.Schema({
   
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
    },
    
    user:
        { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
    
})

module.exports =mongoose.models.detail|| mongoose.model('Details', detail);
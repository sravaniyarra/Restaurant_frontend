let mongoose = require('mongoose')

let AdminSchema = new mongoose.Schema({
    id : {
        type:Number,
    },
    username : {
        type:String,
    },
    email : {
        type:String
    },
    password: {
        type:String,
    },
    phonenumber:{
        type:Number,
    }
}) 


module.exports = mongoose.model('Admins',AdminSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema ({
    name :{
        type : String
    },
    category:{
        type : String
    },
    description :{
        type : String
    },
    price: {
        type : Number
    },
    imageUrl:{
        type : String
    },
    qty:{
        type : Number}
});

module.exports = mongoose.model ('Products',productSchema)
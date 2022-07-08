const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user = new Schema({
    firstName : {type:String},
    lastName : {type:String},
    place : {type:String},
    phone : {type: Number}
},
{
    versionKey: false,
  }
)
const model = mongoose.model("user" , user);
module.exports = model

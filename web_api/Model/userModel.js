const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;


const users = new Schema({
  name : {type:String, maxlength:20},
  email : {type:String, required:true},
  dob :{type:Date},
  Address : {type:String},
  city : {type:String},
  state :{type:String},
  mobile : {type:Number},
  password : {type: String, required:false},

})


/**exporting modules */
module.exports.users = mongoose.model('users', users);

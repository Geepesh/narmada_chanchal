const mongoose = require('mongoose');
const usrSchema = new mongoose.Schema({
  name : {
    type :String,
    rquired : true
  },
  contact : {
    type :Number,
    rquired : true
  },address :{
    type : String
  },ammount : {
    type : Number,
    required : true
  },date : {
    type : String,
    required : true
  },class:{
    type : String,
    required : true
  }
})

const Usr = mongoose.model('usr',usrSchema);


module.exports = Usr;

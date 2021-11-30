// for newsleter subscription.
const validator= require("validator");
const mongoose = require("mongoose"); 
const { stringify } = require('querystring')
const userschema2 = mongoose.Schema({
    email:{
      type:String,
      required:true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Invalid email");
        }
      }
       
    }
  })
  module.exports = mongoose.model("Newslet", userschema2);
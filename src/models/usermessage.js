// for contact us section
const mongoose = require("mongoose"); 
const { stringify } = require('querystring')
const userschema = mongoose.Schema({
    name:{
      type:String,
      required:true 
    },
    email:{
      type:String,
      required:true ,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Invalid email");
        }
      }  
    }, 
   phone:{
    type:Number,
    required:true ,
    min:10
  },
  message:{
    type:String,
    required:true  
  }
})
module.exports = mongoose.model("User", userschema);
const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");
const crypto=require("crypto");
const { default: isEmail } = require("validator/lib/isEmail");

//name,email,photo,password,passwordConfirm
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please tell us your name"],
  },
  email:
  {
    type:String,
    required:[true,"Please provide your email"],
    unique:true,
    lowercase:true,
    validate:[validator.isEmail,'Please provide a valid email'],
  },
  photo:{
    type:String,
    default:'default.jpg',
  },
  password:
  {
    type:String,
    required:[true,"Please provide a password"],
    minlength:8,
  },
  passwordConfirm:{
    type:String,
    required[truw,"Please confirm your password"],
    validate:{function(el){
      return el===this.password;
    },
    message:'Passwords are not same!',
  },
  passwordChangedAt:Date,
  passwordResetToken:String,
  passwordresetExpires:Date,
  active:{
    type:Boolean,
    default:true,
  }
  }
})

const User=mongoose.model('User',userSchema);
module.exports=User;
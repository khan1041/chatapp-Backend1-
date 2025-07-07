
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const userSchema = new mongoose.Schema({
  fullName:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true
    }
    
},{timestamps:true});

// userSchema.methods.generateToken=function(){

//     try {
//      return jwt.sign({
   
//       userId:this._id.toString(),
//       username:this.username,
//       //isAdmin:this.isAdmin
//       // nid:this.nid
//      },
     
//    process.env. JWT_SECRECT_KEY,
//    {
//      expiresIn:"30d"
//    }
   
//    )
//     } catch (error) {
//      console.log(error)
//     }
   
//    }

export const User = mongoose.model('User', userSchema);
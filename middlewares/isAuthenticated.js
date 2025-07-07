

import jwt from "jsonwebtoken";
import { User } from "../models/UserScema.js";
import dotenv from 'dotenv'
const isAuthenticated = async (req, res, next) => {
//     try {
     
//   const token=req.header("Authorization")
//   if(!token){
//     return res.status(401).json({msg:"not massage"})
//   }
  
   
// const jwttoken=token.replace("Bearer","").trim()
  

// try {
//   const isVerified=jwt.verify(jwttoken,process.env.JWT_SECRECT_KEY)
 

// const userdata=await User.findOne({username:isVerified.username}).select({password:0})


// req.user=userdata,
// req.token=token,
// req.userId=userdata._id

//   next()
// } catch (error) {
//   console.log(error)
// }
try {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"User not authenticated."})
    };
    const decode = await jwt.verify(token,process.env.JWT_SECRECT_KEY);
    if(!decode){
        return res.status(401).json({message:"Invalid token"});
    };
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }

 
}
export default isAuthenticated;


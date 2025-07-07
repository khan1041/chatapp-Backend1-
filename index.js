

import express, { urlencoded } from 'express'
import conectedDb from './db/dbconection.js'
//import router from './routes/userroutes.js'
import router from './routes/Userroutes.js';
import massage from './routes/messageRoute.js'
import { v2 as cloudinary } from "cloudinary";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import {app, server } from './socket/socket.js';
//import { errorMiddleware } from './midelware/errorhandel.js';
//const app = express()
export default app
dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: true }));

app.use(
  cors({
 origin:true,
credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

  })
)

//tiBPI7LUbBnOwdoE
//app.use(cors(corsoption))
app.use(express.static('public'))
//import fileUpload from 'express-fileupload'

const port=8000

// app.use(fileUpload({

//   useTempFiles:true,
//   tempFileDir:"/tmp",
//  }))
 app.use("/app/auth",router)
 app.use("/app/auth",massage)

 cloudinary.config({ 
 cloud_name:process.env.CLOUD_NAME, 
 api_key:process.env. CLOUD_API_KEY, 
 api_secret:process.env.API_SECRET_KEY 
 // Click 'View API Keys' above to copy your API secret
}); 
//app.use(errorMiddleware)
conectedDb().then(()=>{
  server.listen(port,()=>{
   console.log(`surver is running at port:${port}`)    
  })
})

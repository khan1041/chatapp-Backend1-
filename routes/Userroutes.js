



import express from 'express'
import { register,login,userdata,getOtherUsers,logout} from '../controller/Usercontoler.js'
//import upload from '../middlewares/Multer.js'
import { singleUpload } from '../middlewares/multer.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

//import { isAuthenticated } from '../middlewares/isAdmin.js'
//import { blogstart,updateBlog,allBlog,getSingleBlogs,blogimageCange,deleteBlog,Myblogs} from '../controllers/Blogcrate.js'
const router=express.Router()

router.post('/register',register)
router.post("/login",login)
router.route("/get").get(isAuthenticated,getOtherUsers);
 router.route("/user").get(isAuthenticated,userdata);
router.route("/logout").get(logout);

// router.get("/profile",isAuthenticated,profile)
// router.get("/get",isAuthenticated,alluser)
//router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

//Blog router

export default router

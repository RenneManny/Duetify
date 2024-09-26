import express from 'express';
import {registerUser,loginUser, myProfile,userLogout} from '../controller/userController.js';
import isAuth from '../middlewares/isauth.js';
const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser)
router.get('/me',isAuth,myProfile)
router.get("/logout",isAuth,userLogout)
export default router;

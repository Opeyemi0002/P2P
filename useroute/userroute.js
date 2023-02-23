import express from "express";
import isLogin from "../middleware/islogin.js";
import { registerController,loginController } from "../usercontroller/controller.js";
const router= express.Router();

//register User
router.post('/register', registerController);

//login User
router.post('/login', isLogin, loginController);

//




export default router;
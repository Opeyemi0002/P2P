import express from "express";
import { registerController,loginController } from "../usercontroller/controller.js";
const router= express.Router();

//register User
router.post('/register', registerController);

//login User
router.post('/login', loginController);




export default router;
import express from "express";
const router = express.Router();
// Load Controllers
import {
  registerController,
  activationController,
  authUser,
  getUsers,
} from "../controller/authController.js";

import { validSign, validLogin } from "../helpers/valid.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/register", validSign, registerController);
router.post("/login", validLogin, authUser);
router.post("/activation", activationController);

router.route("/admin").get(protect, admin, getUsers);
// forgot reset password
// router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
// router.put('/resetpassword', resetPasswordValidator, resetPasswordController);

// Google and Facebook Login
// router.post('/googlelogin', googleController)
// router.post('/facebooklogin', facebookController)

export default router;

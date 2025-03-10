import express from "express";
import { isEmailValue, isPassValue, checkUserSigned, checkPassValue, checkEmailValue, checkConfirmPassword } from "../middleware/userMiddleware/userSignUpMiddleware/index.js";
import { userSignUpController } from "../controller/userController/userSignupController.js";
export const userSignUpRouter = express.Router();

userSignUpRouter.post("/", isEmailValue, checkEmailValue, checkUserSigned);
userSignUpRouter.post(
  "/password",
  isPassValue,
  checkPassValue,
  checkConfirmPassword,
  userSignUpController
);

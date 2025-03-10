import express from "express";
import { isEmailValue } from "../middleware/userMiddleware/userSignUpMiddleware/isEmailValue.js";
import { isPassValue } from "../middleware/userMiddleware/userSignUpMiddleware/isPasswordValue.js";
import { checkUserSigned } from "../middleware/userMiddleware/userSignUpMiddleware/checkUserSigned.js";
import { checkPassValue } from "../middleware/userMiddleware/userSignUpMiddleware/checkPasswordValue.js";
import { checkEmailValue } from "../middleware/userMiddleware/userSignUpMiddleware/checkEmailValue.js";
import { checkConfirmPassword } from "../middleware/userMiddleware/userSignUpMiddleware/checkConfirmPassword.js";
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

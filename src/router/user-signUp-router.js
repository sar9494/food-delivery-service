import express from "express";
import { isEmailValue } from "../middleware/user-middleware/user-signUp-middleware/isEmailValue.js";
import { isPassValue } from "../middleware/user-middleware/user-signUp-middleware/isPasswordValue.js";
import { checkUserSigned } from "../middleware/user-middleware/user-signUp-middleware/checkUserSigned.js";
import { checkPassValue } from "../middleware/user-middleware/user-signUp-middleware/checkPasswordValue.js";
import { checkEmailValue } from "../middleware/user-middleware/user-signUp-middleware/checkEmailValue.js";
import { checkConfirmPassword } from "../middleware/user-middleware/user-signUp-middleware/checkConfirmPassword.js";
import { userSignUpController } from "../controller/user-controller/user-signup-controller.js";
export const userSignUpRouter = express.Router();

userSignUpRouter.post("/", isEmailValue, checkEmailValue, checkUserSigned);
userSignUpRouter.post(
  "/password",
  isPassValue,
  checkPassValue,
  checkConfirmPassword,
  userSignUpController
);

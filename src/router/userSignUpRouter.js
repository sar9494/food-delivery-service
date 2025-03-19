import express from "express";
import { isEmailValue, isPassValue, checkUserExist,  } from "../middleware/userMiddleware/userSignUpMiddleware/index.js";
import { userSignUpController } from "../controller/userController/userSignupController.js";
export const userSignUpRouter = express.Router();

userSignUpRouter.post("/", isEmailValue,checkUserExist);
userSignUpRouter.post(
  "/password",
  isPassValue,
  userSignUpController
);

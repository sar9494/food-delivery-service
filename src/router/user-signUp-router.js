import express from 'express'
import { isEmailValue } from '../middleware/user-signUp-middleware/isEmailValue.js'
import { isPassValue } from '../middleware/user-signUp-middleware/isPasswordValue.js'
import { checkUserSigned } from '../middleware/user-signUp-middleware/checkUserSigned.js'
import { checkPassValue } from '../middleware/user-signUp-middleware/checkPasswordValue.js'
import { checkEmailValue } from '../middleware/user-signUp-middleware/checkEmailValue.js'
import { checkConfirmPassword } from "../middleware/user-signUp-middleware/checkConfirmPassword.js"
import { userSignUpController } from '../controller/user-controller/user-signup-controller.js'
// import {user-}
export const userSignUpRouter = express.Router()

userSignUpRouter.post('/signup', isEmailValue, checkEmailValue, checkUserSigned)
userSignUpRouter.post('/signup/password', isPassValue, checkPassValue, checkConfirmPassword, userSignUpController)
import express from 'express'
import { isEmailValue } from '../middleware/user-middleware/user-login-middleware/isValue.js'
import { checkPassValue } from '../middleware/user-middleware/user-login-middleware/checkValueFormat.js'
import { checkUserSigned } from '../middleware/user-middleware/user-login-middleware/checkUserSigned.js'
export const userLoginRouter = express.Router()

userLoginRouter.post('/', isEmailValue, checkPassValue, checkUserSigned)

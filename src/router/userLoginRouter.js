import express from 'express'
import { isEmailValue } from '../middleware/userMiddleware/userLoginMiddleware/isValue.js'
import { checkPassValue } from '../middleware/userMiddleware/userLoginMiddleware/checkValueFormat.js'
import { checkUserSigned } from '../middleware/userMiddleware/userLoginMiddleware/checkUserSigned.js'
export const userLoginRouter = express.Router()

userLoginRouter.post('/', isEmailValue, checkPassValue, checkUserSigned)

import express from 'express'
import { isEmailValue, checkPassValue, checkUserSigned } from '../middleware/userMiddleware/userLoginMiddleware/index.js'
export const userLoginRouter = express.Router()
userLoginRouter.post('/', isEmailValue, checkPassValue, checkUserSigned)

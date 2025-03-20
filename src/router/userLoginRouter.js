import express from 'express'
import { isEmailValue,  checkUserSigned } from '../middleware/userMiddleware/userLoginMiddleware/index.js'
export const userLoginRouter = express.Router()
userLoginRouter.post('/', isEmailValue,  checkUserSigned)

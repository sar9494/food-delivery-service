import express from 'express'
import { updateUser } from '../controller/userController/updateUser.js'
import { DeleteUser } from '../controller/userController/deleteUser.js'
import { userSignUpRouter } from './userSignUpRouter.js'
import { userLoginRouter } from './userLoginRouter.js'
export const userRouter = express.Router()
userRouter.delete("/", DeleteUser)
userRouter.put("/", updateUser)
userRouter.use("/login", userLoginRouter)
userRouter.use("/signup", userSignUpRouter)


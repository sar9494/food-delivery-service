import express from 'express'
import { updateUser } from '../controller/user-controller/updateUser.js'
import { DeleteUser } from '../controller/user-controller/deleteUser.js'
import { userSignUpRouter } from './user-signUp-router.js'
import { userLoginRouter } from './user-loginRouter.js'
export const userRouter = express.Router()
userRouter.delete("/", DeleteUser)
userRouter.put("/", updateUser)
userRouter.use("/login", userLoginRouter)
userRouter.use("/signup", userSignUpRouter)


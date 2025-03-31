import express from 'express'
import { updateUser } from '../controller/userController/updateUser.js'
import { DeleteUser } from '../controller/userController/deleteUser.js'
import { userSignUpRouter } from './userSignUpRouter.js'
import { userLoginRouter } from './userLoginRouter.js'
import { loggedIn } from '../middleware/userMiddleware/loggedIn.js'
import { getUser } from '../controller/userController/getUser.js'
import { isIdValid } from '../middleware/userMiddleware/isIdValid.js'
export const userRouter = express.Router()
userRouter.delete("/", DeleteUser)
userRouter.put("/",isIdValid, loggedIn ,updateUser)
userRouter.use("/login", userLoginRouter)
userRouter.use("/signup", userSignUpRouter)
userRouter.post("/",isIdValid,getUser)

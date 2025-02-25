import express from "express";
import { checkValue } from '../middleware/admin-login-middleware/admin-login-checkValue.js'
import { isValue } from "../middleware/admin-login-middleware/admin-login.js";
import { checkSigned } from "../middleware/admin-login-middleware/admin-login-checkSigned.js"
export const adminRouter = express.Router()

adminRouter.post('/login', isValue, checkValue, checkSigned)
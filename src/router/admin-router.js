import express from "express";
import {checkValue} from '../middleware/admin-middleware/admin-login-checkValue.js'
import { isValue } from "../middleware/admin-middleware/admin-login.js";
import {checkSigned} from "../middleware/admin-middleware/admin-login-checkSigned.js"
export const adminRouter = express.Router()

adminRouter.post('/login',isValue,checkValue,checkSigned)
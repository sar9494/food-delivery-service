import { Users } from "../../../models/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
export const checkUserSigned = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const isSigned = await Users.findOne({ email });

        if (!isSigned) {
            res.send({
                success: false,
                message: "Account not found"
            })

        } else {
            const isCorrect = await bcrypt.compare(password, isSigned.password)
            const dateMiloSecond = Date.now()
            const currentDate = new Date(dateMiloSecond).toLocaleString()
            const dateAsSecond = Math.floor(dateMiloSecond / 1000)
            const currentDateInSecond = new Date(dateAsSecond * 1000).toLocaleString()
            const expirationDate = dateAsSecond + 60 * 60
            const decodePass = "123"
            if (isCorrect) {
                const token = jwt.sign(
                    { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: isSigned }, decodePass)
                res.send({
                    success: true,
                    message: "logged in",
                    token: token
                }).status(200)
            }
            else {
                res.send({
                    success: false,
                    message: "Wrong password"
                }).status(400)
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("User sign in error:", error)
    }
}
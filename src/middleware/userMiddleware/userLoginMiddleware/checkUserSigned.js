import { Users } from "../../../models/userSchema.js"
import bcrypt from 'bcrypt'
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
            if (isCorrect) {
                res.send({
                    success: true,
                    message: "logged in"
                })
            }
            else {
                res.send({
                    success: false,
                    message: "Wrong password"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("User sign in error:", error)
    }
}
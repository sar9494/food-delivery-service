import { Users } from "../../models/userSchema.js"
export const getUsers = async (req, res) => {
    try {
        const allusers = await Users.find()
        res.status(200).send(allusers)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
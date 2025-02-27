import { Users } from "../../models/user-schema.js"
export const DeleteUser = async (req, res) => {

    const { email } = req.body
    try {
        await Users.findOneAndDelete({ email })
        res.status(200).send({
            success: true,
            message: "User deleted"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }

}
import { Users } from "../../models/user-schema.js"
export const DeleteUser = async (req, res) => {

    const { email } = req.body
    try {
        const deleteUser = await Users.findOneAndDelete({ email })
        if (deleteUser) {
            res.status(200).send({
                success: true,
                message: "User deleted"
            })
        } else {
            res.status(404).send({
                success: false,
                message: "User not found"
            })
        }
    } catch (error) {
        res.status(500).send("Server error", error)
    }

}
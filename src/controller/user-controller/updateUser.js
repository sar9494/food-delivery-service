import { Users } from "../../models/user-schema.js"
export const updateUser = async (req, res) => {
    const { email, phoneNumber, address, } = req.body
    try {
        const updateUser = await Users.findOneAndUpdate({ email }, { phoneNumber, address }, { new: true })
        console.log(updateUser);

        if (updateUser) {
            res.status(200).send(updateUser)
        } else {
            res.status(404).send({
                success: false,
                message: "User not found"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
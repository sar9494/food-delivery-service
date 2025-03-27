import { Users } from "../../models/userSchema.js"
export const getUser = async (req, res) => {
    const {id}=req.body
    try {
        const allusers = await Users.findById(id)
        res.status(200).send(allusers)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
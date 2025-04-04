import { Users } from "../../models/userSchema.js"
export const updateUser = async (req, res) => {
    const {  phoneNumber, address, id} = req.body
    try {
        // res.send(id)
        const updatedUser = await Users.findByIdAndUpdate(id, { phoneNumber, address },{new:true})

        if (updatedUser) {
            res.status(200).send(updatedUser)
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
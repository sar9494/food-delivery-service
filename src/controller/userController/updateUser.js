import { Users } from "../../models/userSchema.js"
export const updateUser = async (req, res) => {
    const {  phoneNumber, address, user} = req.body
    const {id}=user
    try {
        console.log(id);
        
        const updatedUser = await Users.findByIdAndUpdate(id, { phoneNumber, address })
        console.log("user",updatedUser);

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
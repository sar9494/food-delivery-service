import { FoodOrderModel } from "../../models/foodOrderSchema.js";
export const deleteOrder = async (req, res) => {
    const { user } = req.body
    try {
        await FoodOrderModel.findOneAndDelete({ user })
        res.status(200).send({
            success: true,
            message: "Order deleted"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
import { FoodOrderModel } from "../../models/foodOrderSchema.js";
export const getOrders = async (req, res) => {
    try {
        const allOrders = await FoodOrderModel.find()
        res.status(200).send(allOrders)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
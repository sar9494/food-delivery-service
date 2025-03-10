import { FoodOrderModel } from "../../models/foodOrderSchema.js"
export const orderExist = async (req, res, next) => {
    const { id } = req.body
    try {
        const foodOrder = await FoodOrderModel.findById(id);
        if (!foodOrder) {
            res.status(404).send({
                error: true,
                message: "Order not found."
            })
        } else next()
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error,
        });
    }
}
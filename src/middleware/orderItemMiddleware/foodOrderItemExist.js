import { FoodItemModel } from "../../models/foodOrderItemSchema.js";
export const foodOrderItemExist = async (req, res, next) => {
    const { id } = req.body
    try {
        const foodOrderItem = await FoodItemModel.findById(id)
        if (!foodOrderItem) {
            res.send({
                error: true,
                message: "Food order item not found."
            })
        } else next()
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error,
        });
    }
}
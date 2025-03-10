import { FoodOrderModel } from "../../models/foodOrderSchema.js";
export const updateOrder = async (req, res) => {
    const { user, status } = req.body
    try {
        const updatedOrder = await FoodOrderModel.findOneAndUpdate({ user }, { status }, { new: true })
        await updatedOrder.save()
    } catch (error) {

    }
}
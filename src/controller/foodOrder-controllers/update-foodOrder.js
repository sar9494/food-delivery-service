import { FoodOrderModel } from "../../models/foodOrder-schema.js";
export const updateOrder = async (req, res) => {
    const { user, status } = req.body
    try {
        const updatedOrder = await FoodOrderModel.findOneAndUpdate({ user }, { status }, { new: true })
        await updatedOrder.save()
    } catch (error) {

    }
}
import { FoodOrderModel } from "../../models/foodOrderSchema.js"
export const createFoodOrder = async (req, res) => {
    const { user, totalPrice,foodOrderItems, status } = req.body
    try {
        const newOrder = await FoodOrderModel.create({ user: user, totalPrice: totalPrice, foodOrderItems: foodOrderItems, status: status })
        await newOrder.save();
        res.status(201).send(newOrder)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
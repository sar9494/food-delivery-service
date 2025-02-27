import { FoodModel } from "../../models/food-schema.js"
export const deleteFood = async (req, res) => {
    const { foodName } = req.body
    try {
        await FoodModel.findOneAndDelete({ foodName })
        res.status(200).send({
            success: true,
            message: "Food deleted"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
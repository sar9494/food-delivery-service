import { FoodModel } from "../../models/foodSchema.js";
export const foodNameExist = async (req, res, next) => {
    const { foodName } = req.body
    try {
        const food = await FoodModel.findOne({ foodName: foodName })
        if (!food) {
            res.status(404).send({
                error: true,
                message: "Food name already exist."
            })
        } else next()
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error,
        });
    }
}
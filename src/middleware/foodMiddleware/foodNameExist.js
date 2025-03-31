import { FoodModel } from "../../models/foodSchema.js";
export const foodNameExist = async (req, res, next) => {
    const { foodName } = req.body
    try {
        const food = await FoodModel.findOne({ $or: [
            { 'foodName' :foodName },
          ]})
          
        if (food!==null) {
            res.status(400).send({
                success: false,
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
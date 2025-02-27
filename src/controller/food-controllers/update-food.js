import { FoodModel } from "../../models/food-schema";
export const UpdateFood = async (req, res) => {
    const { foodName, price } = req.body
    try {
        const updateFood = await FoodModel.findOneAndUpdate({ foodName }, { price, image, ingredients, category }, { new: true })
        await updateFood.save();
        res.status(201).send(updateFood)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
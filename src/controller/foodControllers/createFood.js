import { FoodModel } from "../../models/foodSchema.js"
export const createFood = async (req, res) => {
    const { foodName, ingredients, image, price, category } = req.body
    try {
        const newFood = await FoodModel.create({
            foodName: foodName,
            ingredients: ingredients,
            image: image,
            price: price,
            category: category
        })
        await newFood.save();
        res.status(201).send(newFood)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}
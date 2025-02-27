import { FoodCategorySchema } from "../../models/category-schema.js"
export const getCategories = (req, res) => {
    try {
        const categories = FoodCategorySchema.find()
        res.status(200).send(categories)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
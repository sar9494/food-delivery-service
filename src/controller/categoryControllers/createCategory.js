import { FoodCategorySchema } from "../../models/categorySchema.js"
export const createCategory = async (req, res) => {
    const { categoryName } = req.body
    try {
        const newCategory = await FoodCategorySchema.create({ categoryName: categoryName })
        await newCategory.save();
        res.status(201).send(newCategory)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
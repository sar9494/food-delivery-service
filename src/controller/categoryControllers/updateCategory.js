import { FoodCategorySchema } from "../../models/categorySchema.js"
export const updateCategory = async (req, res) => {
    const { id, categoryName } = req.body
    try {
        const updatedCategory = await FoodCategorySchema.findByIdAndUpdate(id, { categoryName })
        res.status(200).send(updatedCategory)
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
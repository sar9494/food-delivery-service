import { FoodCategorySchema } from "../../models/category-schema.js"
export const deleteCategory = async (req, res) => {
    const { categoryName } = req.body
    try {
        await FoodCategorySchema.findOneAndDelete({ categoryName })
        res.status(200).send({
            success: true,
            message: "Category deleted"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}
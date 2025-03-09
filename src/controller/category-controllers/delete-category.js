import { FoodCategorySchema } from "../../models/category-schema.js";
export const deleteCategory = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedCategory = await FoodCategorySchema.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

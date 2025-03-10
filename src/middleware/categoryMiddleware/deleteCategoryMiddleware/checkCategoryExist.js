import { FoodCategorySchema } from "../../../models/categorySchema.js";
export const isCategoryExist = async (req, res, next) => {
  const { categoryName } = req.body;
  try {
    const existingCategory = await FoodCategorySchema.findOne({ categoryName });
    if (!existingCategory) {
      res.status(400).send({
        error: true,
        message: "Category not found",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error,
    });
  }
};

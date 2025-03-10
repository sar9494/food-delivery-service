import { FoodCategorySchema } from "../../../models/categorySchema.js";
export const checkName = async (req, res, next) => {
  const { categoryName } = req.body;
  try {
    const existingCategory = await FoodCategorySchema.findOne({ categoryName });
    if (existingCategory) {
      res.status(400).send({
        error: true,
        message: "Category name already exists",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

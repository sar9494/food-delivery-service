import { FoodCategorySchema } from "../../models/category-schema.js";
export const getCategories = async (req, res) => {
  try {
    const categories = await FoodCategorySchema.find();
    console.log(categories);

    res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

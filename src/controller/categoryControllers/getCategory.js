import { FoodCategorySchema } from "../../models/categorySchema.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await FoodCategorySchema.aggregate([
      {
        $lookup: {
          from: "foods", // Name of the food collection (this should be the same as the collection name in MongoDB)
          localField: "_id", // The field from FoodCategorySchema
          foreignField: "category", // The field in FoodModel that references the category
          as: "foods", // The alias for the foods array
        }
      },
      {
        $project: {
          _id:1,
          categoryName: 1, // Assuming the category has a `name` field
          foodCount: {
            $size: "$foods" // Count the number of foods in each category
          }
        }
      },
      
    ]);

    res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

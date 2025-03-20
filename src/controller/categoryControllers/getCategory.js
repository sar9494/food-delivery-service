import { FoodCategorySchema } from "../../models/categorySchema.js";

export const getCategories = async (req, res) => {
  try {
    // Aggregation pipeline to get categories with total price of food items
    const categories = await FoodCategorySchema.aggregate([
      {
        // Join FoodCategorySchema with FoodModel to get the food items in each category
        $lookup: {
          from: "foods", // Name of the food collection (this should be the same as the collection name in MongoDB)
          localField: "_id", // The field from FoodCategorySchema
          foreignField: "category", // The field in FoodModel that references the category
          as: "foods", // The alias for the foods array
        }
      },
      {
        // Group by category and calculate the total price of food items in each category
        $project: {
          categoryName: 1, // Assuming the category has a `name` field
          foodCount: {
            $size: "$foods" // Count the number of foods in each category
          }
        }
      },
      {
        // Sort categories by totalPrice in descending order
        $sort: { totalPrice: -1 }
      }
    ]);

    res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

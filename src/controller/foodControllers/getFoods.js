import { FoodModel } from "../../models/foodSchema.js";

export const getFoods = async (req, res) => {
  try {
    const allFoods = await FoodModel.aggregate([
      {
        $lookup: {
          from: "categories",  // The 'categories' collection name in the database
          localField: "category",  // Field in FoodModel that references category's ObjectId
          foreignField: "_id",  // Match FoodModel's category field to the _id in the categories collection
          as: "categoryInfo"  // Create an alias to store matched category data
        }
      },
      {
        $unwind: { path: "$categoryInfo", preserveNullAndEmptyArrays: true }  // Unwind to flatten the array
      },
      {
        $project: {
          foodName: 1,  // Keep foodName field
          price: 1,  // Keep price field
          ingredients: 1,  // Keep ingredients field
          image: 1,  // Keep image field
          category: {
            id: "$categoryInfo._id",  // Get the _id of the category
            name: "$categoryInfo.categoryName"  // Get the categoryName of the category
          }
        }
      }
    ]);

    // If no foods were found
    if (allFoods.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No foods found."
      });
    }

    // Send the result back
    res.status(200).send(allFoods);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    return res.status(500).send({
      success: false,
      message: "An error occurred while fetching foods.",
    });
  }
};

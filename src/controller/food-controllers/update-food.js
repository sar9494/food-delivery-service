import { FoodModel } from "../../models/food-schema.js";

export const updateFood = async (req, res) => {
  const { _id, foodName, price, image, ingredients, category } = req.body;

  try {
    const updatedFood = await FoodModel.findByIdAndUpdate(
      _id,
      { foodName, price, image, ingredients, category },
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

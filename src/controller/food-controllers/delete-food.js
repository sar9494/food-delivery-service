import { FoodModel } from "../../models/food-schema.js";

export const deleteFood = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedFood = await FoodModel.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

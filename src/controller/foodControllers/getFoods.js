import { FoodModel } from "../../models/foodSchema.js";
export const getFoods = async (req, res) => {
  try {
    const allFoods = await FoodModel.find();
    res.status(200).send(allFoods);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

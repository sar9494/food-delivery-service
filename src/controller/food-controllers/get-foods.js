import { FoodModel } from "../../models/food-schema.js";
export const getFoods = async (req, res) => {
  try {
    const allFoods = await FoodModel.find();
    res.starus(200).send(allFoods);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

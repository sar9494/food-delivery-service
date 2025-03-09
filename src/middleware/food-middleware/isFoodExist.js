import { FoodModel } from "../../models/food-schema";
export const isFoodExist = async (req, res, next) => {
  const { id } = req.body;
  try {
    const searchingFood = await FoodModel.findById(id);
    if (!searchingFood) {
      res.status(404).send({
        success: false,
        message: "Couldn't find the food.",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

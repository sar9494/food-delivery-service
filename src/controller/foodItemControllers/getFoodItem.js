import { FoodItemModel } from "../../models/foodOrderItemSchema.js";
export const getFoodOrderItem = async (req, res) => {
  try {
    const allFoodItem = await FoodItemModel.find();
    res.status(200).send(allFoodItem);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

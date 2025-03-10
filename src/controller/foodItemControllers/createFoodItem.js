import { FoodItemModel } from "../../models/foodOrderItemSchema.js";
export const createFoodItem = async (req, res) => {
  const { food, quantity } = req.body;
  try {
    const foodItem = await FoodItemModel({
      food: food,
      quantity: quantity,
    });
    foodItem.save();
    res.status(201).send(foodItem);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

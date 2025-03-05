import { FoodItemModel } from "../../models/foodOrderItem-schema.js";
export const updateFoodOrderItem = async (req, res) => {
  const { quantity, food } = req.body;
  try {
    const updateFoodOrderItem = await FoodItemModel.findOneAndUpdate(
      { food },
      { quantity },
      { new: true }
    );
    await updateFoodOrderItem.save();
    res.status(200).send(updateFoodOrderItem);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

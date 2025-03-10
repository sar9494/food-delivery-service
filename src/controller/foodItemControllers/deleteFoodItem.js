import { FoodItemModel } from "../../models/foodOrderItem-schema.js";
export const deleteFoodItem = async (req, res) => {
  const { food } = req.body;
  try {
    await FoodItemModel.findOneAndDelete({ food });
    res.status(200).send({
      success: true,
      message: "Food item deleted successfully.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

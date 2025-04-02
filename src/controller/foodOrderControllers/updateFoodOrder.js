import { FoodOrderModel } from "../../models/foodOrderSchema.js";
export const updateOrder = async (req, res) => {
  const { status, id } = req.body;
  try {
    const updatedOrder = await FoodOrderModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    await updatedOrder.save();
    res.status(200).send({
      success: true,
      message: "Successfully updated.",
    });
  } catch (error) {}
};

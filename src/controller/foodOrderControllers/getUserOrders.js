import mongoose from "mongoose";
export const getUserOrders = async (req, res) => {
  const { id } = req.body;
  try {
    const allOrders = await mongoose
      .model("foodOrders")
      .find({
        user: new mongoose.Types.ObjectId(id),
      })
      .lean();
    const ordersWithFoodDetails = await Promise.all(
      allOrders.map(async (order) => {
        const foodIds = order.foodOrderItems.map((item) => item.food);

        const foodDetails = await mongoose
          .model("foods")
          .find({
            _id: { $in: foodIds },
          })
          .lean();

        const foodMap = {};
        foodDetails.forEach((food) => {
          foodMap[food._id.toString()] = food;
        });

        const enhancedFoodItems = order.foodOrderItems.map((item) => {
          const foodId = item.food.toString();
          const foodDetail = foodMap[foodId] || {};

          return {
            quantity: item.quantity,
            foodName: foodDetail.foodName,
          };
        });

        return {
          id: order._id,
          foodOrderItems: enhancedFoodItems,
          totalPrice: order.totalPrice,
          status: order.status,
          createdAt: order.createdAt,
        };
      })
    );

    res.status(200).send(ordersWithFoodDetails);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

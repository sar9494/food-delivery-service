import { FoodOrderModel } from "../../models/foodOrderSchema.js";
import mongoose from "mongoose";
export const getFoodOrders = async (req, res) => {
  try {
    const allOrders = await FoodOrderModel.find();
    const ordersWithFoodDetails = await Promise.all(
      allOrders.map(async (order) => {
        const userDetail = await mongoose
          .model("users")
          .findOne({
            _id: { $in: order.user },
          })
          .lean();

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
            image: foodDetail.image,
          };
        });

        return {
          id: order._id,
          foodOrderItems: enhancedFoodItems,
          totalPrice: order.totalPrice,
          status: order.status,
          user: userDetail.email,
          address: userDetail.address,
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

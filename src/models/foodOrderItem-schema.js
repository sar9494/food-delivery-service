import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
  quantity: { type: Number },
});

export const FoodItemModel = mongoose.model("foodItems", foodItemSchema);

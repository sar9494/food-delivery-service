import mongoose from "mongoose";
import { FoodItemModel } from "./foodOrderItem-schema";

const foodOrderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    totalPrice: { type: Number, required: true },
    foodOrderItems: {
        type: [FoodItemModel], required: true
    },
    status: { type: String, enum: ["PENDING", "CANCELED", 'DELIVERED'], default: "PENDING" },
}, { timeStamp: true })

export const FoodOrderModel = mongoose.model("foodOrders", foodOrderSchema)
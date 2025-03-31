import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    totalPrice: { type: Number, required: true },
    foodOrderItems: [{
        food:{type: mongoose.Types.ObjectId, ref: "foods", required: true},
        quantity:{type:Number,required:true}
    }],
    status: { type: String, enum: ["PENDING", "CANCELED", 'DELIVERED'], default: "PENDING" },
}, { timestamps: true })

export const FoodOrderModel = mongoose.model("foodOrders", foodOrderSchema)
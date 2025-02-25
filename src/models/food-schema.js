import mongoose from "mongoose";

const foodModel = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    ingredients: { type: String, require: true },
    category: { type: mongoose.Types.ObjectId, ref: "categories" },
    createdAt: { type: Date, require: true },
    updatedAt: { type: Date, require: true }
})

export const FoodSchema = mongoose.model("foods", foodModel)
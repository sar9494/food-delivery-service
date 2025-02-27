import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true, unique: true },
}, { timestamps: true })

export const FoodCategorySchema = mongoose.model("categories", foodCategorySchema)
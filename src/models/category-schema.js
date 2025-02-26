import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema({
    categoryName: { type: String, require: true },
}, { timestamps: true })

export const FoodCategorySchema = mongoose.model("categories", foodCategorySchema)
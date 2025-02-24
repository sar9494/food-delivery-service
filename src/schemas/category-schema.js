import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema({
    categoryName:{type:String,require:true},
    createdAt:{type:Date,require:true},
    updatedAt:{type:Date,require:true}
})
export const FoodCategorySchema = mongoose.model("categories",foodCategorySchema)
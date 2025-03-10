import { createFood, deleteFood, getFoods, updateFood } from "../controller/foodControllers/index.js";
import { valuesValid, checkFoodRejex, isFoodExist, isIdValid, foodNameExist } from "../middleware/foodMiddleware/index.js";
import express from "express";
export const foodRouter = express.Router();
foodRouter.post("/foods", valuesValid, checkFoodRejex, foodNameExist, createFood);
foodRouter.put("/foods", isIdValid, isFoodExist, updateFood)
foodRouter.delete("/foods", isIdValid, isFoodExist, deleteFood)
foodRouter.get("/foods", getFoods)
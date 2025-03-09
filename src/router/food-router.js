import { createFood } from "../controller/food-controllers/create-food.js";
import { deleteFood } from "../controller/food-controllers/delete-food.js";
import { getFoods } from "../controller/food-controllers/get-foods.js";
import { updateFood } from "../controller/food-controllers/update-food.js";
import { valuesValid } from "../middleware/food-middleware/creatingValuesValid.js";
import { checkFoodRejex } from "../middleware/food-middleware/checkFoodRejex.js";
import express from "express";
export const foodRouter = express.Router();
foodRouter.post("/foods", valuesValid, checkFoodRejex, createFood);

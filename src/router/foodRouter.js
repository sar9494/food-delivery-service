import { createFood } from "../controller/foodControllers/createFood.js";
import { deleteFood } from "../controller/foodControllers/deleteFood.js";
import { getFoods } from "../controller/foodControllers/getFoods.js";
import { updateFood } from "../controller/foodControllers/updateFood.js";
import { valuesValid } from "../middleware/foodMiddleware/creatingValuesValid.js";
import { checkFoodRejex } from "../middleware/foodMiddleware/checkFoodRejex.js";
import express from "express";
export const foodRouter = express.Router();
foodRouter.post("/foods", valuesValid, checkFoodRejex, createFood);

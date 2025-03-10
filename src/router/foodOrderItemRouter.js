import { checkInfoValues, foodOrderItemExist, idValid, infoValuesValid } from "../middleware/orderItemMiddleware/index.js"
import { createFoodItem, deleteFoodItem, updateFoodOrderItem, getFoodOrderItem } from "../controller/foodItemControllers/index.js"
import express from 'express'
export const foodOrderItemRouter = express.Router()
foodOrderItemRouter.post("/orderItems", infoValuesValid, checkInfoValues, createFoodItem)
foodOrderItemRouter.get("/orderItems", getFoodOrderItem)
foodOrderItemRouter.put("/orderItems", idValid, foodOrderItemExist, updateFoodOrderItem)
foodOrderItemRouter.delete("/orderItems", idValid, foodOrderItemExist, deleteFoodItem)
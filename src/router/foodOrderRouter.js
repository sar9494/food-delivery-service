import { orderExist } from "../middleware/foodOrderMiddleware/orderExist.js";
import { createFoodOrder, deleteOrder, updateOrder, getOrders } from "../controller/foodOrderControllers/index.js";
import express from "express"
export const foodOrderRouter = express.Router()
foodOrderRouter.get("/foodOrders", getOrders)
foodOrderRouter.post("/foodOrders", createFoodOrder)
foodOrderRouter.put("/foodOrders", orderExist, updateOrder)
foodOrderRouter.delete("/foodOrders", orderExist, deleteOrder)
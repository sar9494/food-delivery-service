import { orderExist } from "../middleware/foodOrderMiddleware/orderExist.js";
import { isIdValid } from "../middleware/foodOrderMiddleware/isIdValid.js";
import {
  createFoodOrder,
  deleteOrder,
  updateOrder,
  getFoodOrders,
} from "../controller/foodOrderControllers/index.js";
import express from "express";
import { getUserOrders } from "../controller/foodOrderControllers/getUserOrders.js";
export const foodOrderRouter = express.Router();
foodOrderRouter.get("/foodOrders", getFoodOrders);
foodOrderRouter.post("/foodOrders", createFoodOrder);
foodOrderRouter.post("/userfoodOrders", getUserOrders);
foodOrderRouter.put("/foodOrders", isIdValid, orderExist, updateOrder);
foodOrderRouter.delete("/foodOrders", isIdValid, orderExist, deleteOrder);

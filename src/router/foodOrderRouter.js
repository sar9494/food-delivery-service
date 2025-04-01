import { orderExist } from "../middleware/foodOrderMiddleware/orderExist.js";
import { isIdValid } from "../middleware/foodOrderMiddleware/isIdValid.js";
import {
  createFoodOrder,
  deleteOrder,
  updateOrder,
  getOrders,
} from "../controller/foodOrderControllers/index.js";
import express from "express";
import { getUserOrders } from "../controller/foodOrderControllers/getUser'sOrders.js";
export const foodOrderRouter = express.Router();
foodOrderRouter.get("/foodOrders", getOrders);
foodOrderRouter.post("/foodOrders", createFoodOrder);
foodOrderRouter.post("/userfoodOrders", getUserOrders);
foodOrderRouter.put("/foodOrders", isIdValid, orderExist, updateOrder);
foodOrderRouter.delete("/foodOrders", isIdValid, orderExist, deleteOrder);

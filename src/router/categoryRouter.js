import { createCategory, deleteCategory, updateCategory, getCategories } from "../controller/categoryControllers/index.js";
import { isValid, checkName, isCategoryExist, checkNameValue } from "../middleware/categoryMiddleware/index.js";
import express from "express";
export const categoryRouter = express.Router();
categoryRouter.get("/category", getCategories);
categoryRouter.post(
  "/category",
  isValid,
  checkNameValue,
  checkName,
  createCategory
);
categoryRouter.put("/category", isValid, isCategoryExist, updateCategory);
categoryRouter.delete("/category", isValid, isCategoryExist, deleteCategory);

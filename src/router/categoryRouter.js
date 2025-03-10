import { createCategory } from "../controller/categoryControllers/createCategory.js";
import { deleteCategory } from "../controller/categoryControllers/deleteCategory.js";
import { updateCategory } from "../controller/categoryControllers/updateCategory.js";
import { getCategories } from "../controller/categoryControllers/getCategory.js";
import { isValid } from "../middleware/categoryMiddleware/isCategoryValid.js";
import { checkName } from "../middleware/categoryMiddleware/createCategoryMiddleware/checkName.js";
import { isCategoryExist } from "../middleware/categoryMiddleware/deleteCategoryMiddleware/checkCategoryExist.js";
import { checkNameValue } from "../middleware/categoryMiddleware/checkNameValue.js";
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

import { createCategory } from "../controller/category-controllers/create-category.js";
import { deleteCategory } from "../controller/category-controllers/delete-category.js";
import { updateCategory } from "../controller/category-controllers/update-category.js";
import { getCategories } from "../controller/category-controllers/get-category.js";
import { isValid } from "../middleware/category-middleware/isCategoryValid.js";
import { checkName } from "../middleware/category-middleware/createCategory-middleware/checkName.js";
import { isCategoryExist } from "../middleware/category-middleware/deleteCategory-middleware/checkCategoryExist.js";
import { checkNameValue } from "../middleware/category-middleware/checkNameValue.js";
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

import { createCategory } from "../controller/category-controllers/create-category.js";
import { deleteCategory } from "../controller/category-controllers/delete-category.js";
import { updateCategory } from "../controller/category-controllers/update-category.js";
import { getCategories } from "../controller/category-controllers/get-category.js";
import { isCategoryValid } from "../middleware/category-middleware/isCategoryValid.js";
import { isQuantityValid } from "../middleware/category-middleware/isQuantityValid.js";
import { checkName } from "../middleware/category-middleware/createCategory-middleware/checkName.js";
import { isCategoryExist } from "../middleware/category-middleware/deleteCategory-middleware/checkCategoryExist.js";
import { checkQuantityValue } from "../middleware/category-middleware/checkQuantityValue.js";
import express from "express";
export const categoryRouter = express.Router();
categoryRouter.get("/category", getCategories);
categoryRouter.post(
  "/category",
  isCategoryValid,
  isQuantityValid,
  checkQuantityValue,
  checkName,
  createCategory
);
categoryRouter.put(
  "/category",
  isCategoryValid,
  isCategoryExist,
  updateCategory
);
categoryRouter.delete(
  "/category",
  isCategoryValid,
  isCategoryExist,
  deleteCategory
);

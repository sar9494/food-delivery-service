import { categoryRejex } from "../../utils/categoryRejex.js";

export const checkNameValue = (req, res, next) => {
  const { categoryName } = req.body;
  try {
    categoryRejex.validateSync({ categoryName });
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

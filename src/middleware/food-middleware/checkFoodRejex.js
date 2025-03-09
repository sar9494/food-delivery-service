import { foodRejex } from "../../utils/foodRejex.js";
export const checkFoodRejex = (req, res, next) => {
  const { foodName, price, category, image, ingredients } = req.body;
  try {
    foodRejex.validateSync({ foodName, price, category, image, ingredients });
    next();
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error,
    });
  }
};

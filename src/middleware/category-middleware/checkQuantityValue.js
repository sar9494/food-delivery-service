import yup from "yup";
export const checkQuantityValue = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity.number()) {
  }
};

export const valuesValid = (req, res, next) => {
  const { foodName, price, image, ingredients, category } = req.body;
  if (!foodName || !price || !image || !ingredients || !category) {
    res
      .status(404)
      .send({ success: false, message: "Please enter all food information." });
  } else next();
};

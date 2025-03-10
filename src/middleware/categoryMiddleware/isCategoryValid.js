export const isValid = (req, res, next) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    res.status(404).send({
      message: "Category name is required.",
    });
  } else next();
};

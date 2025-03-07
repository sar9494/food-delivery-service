export const isQuantityValid = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity) {
    res.status(400).send({
      error: true,
      message: "Quantity is required.",
    });
  } else {
    next();
  }
};

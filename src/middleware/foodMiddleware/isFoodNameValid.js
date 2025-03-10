export const isFoodNameValid = (req, res, next) => {
  const { foodName } = req.body;
  if (!foodName) {
    res.status(404).send({
      success: false,
      message: "Food name is required.",
    });
  } else {
    next();
  }
};

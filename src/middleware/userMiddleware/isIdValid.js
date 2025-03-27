export const isIdValid = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    res.status(404).send({
      message: "Id is required.",
    });
  } else next();
};

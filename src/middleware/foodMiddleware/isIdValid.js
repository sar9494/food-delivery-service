export const isIdValid = (req, res, next) => {
  const { _id } = req.body;
  if (_id) {
    res.status(404).send({
      success: true,
      messagge: "Id is required.",
    });
  } else next();
};

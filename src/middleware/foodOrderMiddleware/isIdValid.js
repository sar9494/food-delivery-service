export const isIdValid = (req, res, next) => {
  const { id } = req.body;
  console.log("req body", req.body);

  if (!id) {
    res.status(404).send({
      error: true,
      message: "Id is required.",
    });
  } else next();
};

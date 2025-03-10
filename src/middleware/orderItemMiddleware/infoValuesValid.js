export const infoValuesValid = (req, res, next) => {
    const { quantity, food } = req.body
    if (!quantity || !food) {
        res.status(400).send({
            error: true,
            message: "Quantity and food required"
        })
    } else {
        next()
    }
}
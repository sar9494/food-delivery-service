export const isValid = (req, res, next) => {
    const { categoryName } = req.body
    try {
        if (!categoryName) {
            res.status(404).send({
                message: "Category not found"
            })
        } else next()
    } catch (error) {
        res.status(500).send(error)
    }
}
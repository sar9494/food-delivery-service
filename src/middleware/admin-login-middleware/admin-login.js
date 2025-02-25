export const isValue = (req, res, next) => {
    const { email, password } = req.body

    if (!email) {
        res.status(400).send({
            error: "Bad Request",
            message: "Email required"
        })
    } else if (!password) {
        res.status(400).send({
            error: "Bad Request",
            message: "Password required"
        })
    } else {
        next()
    }
}
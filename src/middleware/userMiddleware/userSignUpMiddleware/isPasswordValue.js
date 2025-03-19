export const isPassValue = (req, res, next) => {
    const { password  } = req.body

    if (!password) {
        res.status(400).send({
            error: "Bad Request",
            message: "Password required"
        })
    } 
    else {
        next()
    }
}
export const isEmailValue = (req, res, next) => {
    const { email } = req.body

    if (!email) {
        res.status(400).send({  
            error: "Bad Request",
            message: "Email required"
        })
    } else { 
        next()
    }
}
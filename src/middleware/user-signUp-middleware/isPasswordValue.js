export const isPassValue = (req, res, next) => {
    const { password , confirm } = req.body

    if (!password) {
        res.status(400).send({  
            error: "Bad Request",
            message: "Password required"
        })
    } else if (!confirm) {
        res.status(400).send({  
            error: "Bad Request",
            message: "Confirm password required"
        })
    } 
    else { 
        next()
    }
}
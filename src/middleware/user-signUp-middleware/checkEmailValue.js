export const checkEmailValue = (req,res,next) => {
    const { email } = req.body
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkEmail.test(email)) {
        res.status(400).send({
            error:true,
            message:"wrong format"
        })
    } else {
        next()
    }
}
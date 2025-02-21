export const checkingValue = (req,res,next) => {
    const { email, password } = req.body
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z]).+$/;
    if (!checkEmail.test(email)) {
        res.status(400).send({
            error:true,
            message:"wrong format"
        })
    } else if(!checkPassword.test(password)){
        res.status(400).send({
            error:true,
            message:"wrong format"
        })
    } else {
        next()
    }
}
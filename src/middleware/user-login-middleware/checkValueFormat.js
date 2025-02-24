export const checkPassValue = (req,res,next) => {
    const { password ,email} = req.body
    const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z]).+$/;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!checkPassword.test(password)) {
        res.status(400).send({
            error:true,
            message:"Password wrong format"
        })
    }  else if (!checkEmail.test(email)) {
        res.status(400).send({
            error:true,
            message:"Email wrong format"
        })
    } else {
        next()
    }
}
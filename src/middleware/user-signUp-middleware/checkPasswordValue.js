export const checkPassValue = (req,res,next) => {
    const { password,confirm } = req.body
    const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z]).+$/;
    if (!checkPassword.test(password)) {
        res.status(400).send({
            error:true,
            message:"wrong format"
        })
    } else if (!checkPassword.test(confirm)) {
        res.status(400).send({
            error:true,
            message:"wrong format"
        })
    } else {
        next()
    }
}
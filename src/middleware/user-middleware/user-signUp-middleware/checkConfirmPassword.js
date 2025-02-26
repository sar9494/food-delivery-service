export const checkConfirmPassword = (req,res,next) =>{
    const {password,confirm}=req.body;
    if(!password===confirm){
        res.status(400).send({
            error:true,
            message:"Confirm password doesn't match"
        })
    }
    else{
        next()
    }
}
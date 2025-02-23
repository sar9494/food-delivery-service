import { User } from "../../schemas/user-schema.js"
export const checkSigned = async (req, res,next) => {
    const { email } = req.body
    try {
        const isSigned = await User.findOne({ email });
        if(!isSigned){
        res.send({
            success:false,
            message:"Already have a account"
        })
        }else{
            next()
        }
        console.log(isSigned);
    } catch (error) {
        console.log(error);
        res.send("doo")
    }
}
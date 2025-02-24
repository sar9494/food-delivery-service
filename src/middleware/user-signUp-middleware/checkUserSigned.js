import { Users } from "../../schemas/user-schema.js"
export const checkUserSigned = async (req, res,next) => {
    const { email } = req.body
    try {
        const isSigned = await Users.findOne({ email });
        if(isSigned){
        res.send({
            success:false,
            message:"Already have a account"
        })
        }else{
            res.send({
                success:true,
                message:"Create password"
            })
        }
        console.log(isSigned);
    } catch (error) {
        console.log(error);
        res.send("doo")
    }
}
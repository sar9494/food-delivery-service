import { Users } from "../../schemas/user-schema.js"
import bcrypt from 'bcrypt'
export const checkUserSigned = async (req, res,next) => {
    const { email ,password} = req.body
    try {
        const isSigned = await Users.findOne({ email });
        if(!isSigned){
        res.send({
            success:false,
            message:"Account not found"
        })
        }else if(bcrypt.compare(password,isSigned)){
            res.send({
                success:true,
                message:"logged in"
            })
        }
        else{
            res.send({
                success:false,
                message:"Wrong password"
            })
        }
        console.log(isSigned);
    } catch (error) {
        console.log(error);
        res.send("doo")
    }
}
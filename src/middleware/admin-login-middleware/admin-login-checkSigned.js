import { Admin } from "../../schemas/admin-schema.js"
export const checkSigned = async (req, res) => {
    const { email, password } = req.body
    try {
        const isSigned = await Admin.findOne({ email });
        if(isSigned.password===password){
        res.send({
            success:true,
            message:"Correct password"
        }).status(200)
        }else{
            res.send({success:false,
                message:"wrong password"
            })
        }
        console.log(isSigned);
    } catch (error) {
        console.log(error);
        res.send("doo")
    }
//df
}
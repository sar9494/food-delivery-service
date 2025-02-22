import { Admin } from "../../schemas/admin.js"
export const checkSigned = async (req, res) => {
    try {
        const { email, password } = req.body
        const isSigned = await Admin.findOne({ email });
        if(isSigned.password===password){
        res.send({
            success:true
        }).status(200)
        }
        console.log(isSigned);
        res.send(isSigned).status(200)
    } catch (error) {
        console.log(error);

    }
//df
}
import { Admin } from "../../schemas/admin.js"
export const checkSigned =async (req,res)=>{
    try {
        const {email,password}=req.body
        
    const isSigned = await Admin.findOne({email});
    console.log(isSigned);
    res.send(isSigned).status(200)
    } catch (error) {
        console.log(error);
        
    }
    
}
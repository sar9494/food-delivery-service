import jwt from "jsonwebtoken"

export const loggedIn=(req,res,next)=>{
const {token}=req.body
try {
    const decoded=jwt.verify(token,"123")
    console.log(decoded.date._id);
    
    console.log("id",decoded.date._id);
    
// next(decoded.date._id)
} catch (error) {
    res.send({
        success:false,
        message:`error ${error}`
    })
}
    


}
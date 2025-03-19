import jwt from "jsonwebtoken"

export const loggedIn=(req,res,next)=>{
const {token}=req.body
const decoded=jwt.verify(token,"123")
console.log(decoded);

}
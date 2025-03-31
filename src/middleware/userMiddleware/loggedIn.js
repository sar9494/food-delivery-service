import jwt from "jsonwebtoken"
import { Users } from "../../models/userSchema.js"

export const loggedIn=(req,res,next)=>{
const {id}=req.body
try {
    const isUserExist=Users.findById(id)
    if(isUserExist){
next()
    }else{res.status(404).send({
        success:false,
        message:"User not found."
    })}
} catch (error) {
    res.send({
        success:false,
        message:`error ${error}`
    })
}
}
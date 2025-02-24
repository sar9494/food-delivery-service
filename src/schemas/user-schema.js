import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    phoneNumber:{type:Number,},
    address:{type:String,},
    role:{type:String,},
    orderedFoods:{type:[{
        foodId:{type:String}
    }]},
    ttl:{type:Date},
    isVerified:{type:Boolean},
    createdAt:{type:Date},
    updatedAt:{type:Date}
})

export const Users = mongoose.model('users',userSchema)
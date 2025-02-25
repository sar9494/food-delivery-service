import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: Number, },
    address: { type: String, },
    role: { type: mongoose.Types.ObjectId, enum: { USER: "USER", ADMIN: "ADMIN" } default:`${enum.USER}`},
    orderedFoods: {
        type: [{
            foodId: { type: String }
        }]
    },
    ttl: { type: Date },
    isVerified: { type: Boolean },
}, { timestamps: true })

export const Users = mongoose.model('users', userSchema)
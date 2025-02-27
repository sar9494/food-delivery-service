import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, },
    address: { type: String, },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER", required: true },
    orderedFoods: { type: mongoose.Types.ObjectId, ref: "foodOrders" },
    ttl: { type: Date },
    isVerified: { type: Boolean },
}, { timestamps: true })

export const Users = mongoose.model('users', userSchema)
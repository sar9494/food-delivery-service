import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: Number, },
    address: { type: String, },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER", require: true },
    orderedFoods: { type: mongoose.Types.ObjectId, ref: "foodOrders" },
    ttl: { type: Date },
    isVerified: { type: Boolean },
}, { timestamps: true })

export const Users = mongoose.model('users', userSchema)
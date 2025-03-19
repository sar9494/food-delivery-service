import bcrypt from "bcrypt";
import { Users } from "../../models/userSchema.js";
export const userSignUpController = async (req, res) => {
  const { password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const newUser = await Users.create({
      email: email,
      password: hashedPassword,
    },);
    await newUser.save();
    res.send({
      success:true,
      message:"Created new account."
    }).status(201);
  } catch (error) {
    console.log("Error occured", error);
    res.send().status(400);
  }
};

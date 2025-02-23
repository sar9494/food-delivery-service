import bcrypt from "bcrypt";
import { Users } from "../../schemas/user-schema.js";
export const userSignUpController = async (req, res) => {
  const { password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const newUser = await Users.create({
      email: email,
      password: hashedPassword,
    });
    res.send(newUser).status(201);
  } catch (error) {
    console.log("Error occured", error);
    res.send().status(400);
  }
};

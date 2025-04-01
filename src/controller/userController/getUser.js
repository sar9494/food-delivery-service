import { Users } from "../../models/userSchema.js";
export const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await Users.findById(id);

    res.status(200).send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).send({
      success: false,
      message: "Error retrieving user information",
    });
  }
};

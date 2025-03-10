import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./router/userRouter.js";
import { categoryRouter } from "./router/categoryRouter.js";
import { foodRouter } from "./router/foodRouter.js";
const url =
  "mongodb+srv://batbayarsaruul0:g2TvhBPGTCL8XnBN@cluster1.vfx1a.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster1";
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected");
  } catch (e) {
    console.log("Error occured", e);
  }
};
connectDb();
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/", categoryRouter);
app.use("/", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

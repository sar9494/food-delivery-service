import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  userRouter,
  categoryRouter,
  foodRouter,
  foodOrderItemRouter,
  foodOrderRouter,
} from "./src/router/index.js";

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
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
connectDb();

app.use("/user", userRouter);
app.use("/", categoryRouter);
app.use("/", foodRouter);
app.use("/", foodOrderRouter);
app.use("/", foodOrderItemRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

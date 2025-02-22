import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { checkSigned } from './middleware/admin-middleware/admin-login-checkSigned.js'
import {adminRouter} from './router/admin-router.js'
const url = "mongodb+srv://batbayarsaruul0:g2TvhBPGTCL8XnBN@cluster1.vfx1a.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster1"
const connectDb = async () => {
  try {
    await mongoose.connect(url)
    console.log("Successfully connected");
  } catch (e) {
    console.log("Error occured", e);
  }
}
connectDb()
const app=express()
const port=5000;
app.use(express.json())
app.use(cors())
app.use('/login',adminRouter)
// app.use("/",(req,res)=>{
// res.send('hello')
// })
// app.post("/",checkSigned)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/userRouter.js";
import cors from "cors";

//configure dotenv
dotenv.config();
const app = express();
app.use(express.json())
//cors
app.use(cors({ origin: `${process.env.FRONTEND_URL}` }));

//mongodb connection
const url = process.env.MONGO_URL;
let res = mongoose.connect(url);
if (res) {
  console.log("DataBase connect");
} else {
  console.log("DataBase not Connect");
}
app.use("/user", userRouter);
//checking backend
app.use("/", (req, res) => {
  res.status(200).json({ message: "<h1>Login page backend Working<h1>" });
});

//app listen
app.listen(process.env.PORT || "9000", () => {
  console.log("App listen");
});

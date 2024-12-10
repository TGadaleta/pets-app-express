import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import petsRouter from "./controllers/pets.js";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors())

// Routes go here
app.use("/pets", petsRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});

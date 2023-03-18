import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import connectDB from "./Database/config.js";
import helmet from "helmet";
import postRoutes from "./routes/post.js";

//*  CONFIGURATION *//
const app = express();
const PORT = process.env.PORT || 6001;

app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//* API ROUTES *//
app.use("/api/posts", postRoutes);

//* DB Connection *//
connectDB();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

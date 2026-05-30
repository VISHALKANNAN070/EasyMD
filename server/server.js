import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import formatRoutes from "./routes/formatRoutes.js";

const app = express();
dotenv.config();
app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(morgan("dev"));

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

app.use("/api/format", formatRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

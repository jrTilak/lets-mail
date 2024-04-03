import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import morgan from "morgan";
import bodyParser from "body-parser";
config();

const app = express();

//middlewares

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1", appRouter);

export default app;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./routes/users";
import { config } from "./config/env";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", usersRouter);

app.get("/", (_req, res) => {
  res.json({ message: "Institute-CC API is running" });
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

import express from "express";
import cors from "cors";
import api from "./routes/api";
import { config } from "./config/env";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", api);

app.get("/", (_req, res) => {
  res.json({ message: "Institute-CC API is running" });
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

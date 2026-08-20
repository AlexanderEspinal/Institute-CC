import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/users";
import { config } from "./config/env";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", router);

const clientDist = path.join(__dirname, "../../client/dist");
app.use(express.static(clientDist));
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

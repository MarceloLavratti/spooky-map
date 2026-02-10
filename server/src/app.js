import express from "express";
import cors from "cors";
import reportsRoutes from "./routes/reports.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/reports", reportsRoutes);

export default app;

import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

export default app;

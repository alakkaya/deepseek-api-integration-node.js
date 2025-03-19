import express from "express";
import aiRouter from "../routes/aiRouter.js";

//app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/ai", aiRouter);

// Error Handler

export default app;

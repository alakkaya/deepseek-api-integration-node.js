import express from "express";
import {
  chatWithDeepseek,
  chatWithStreamDeepseek,
} from "../controller/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/chat-with-deepseek", chatWithDeepseek);
aiRouter.post("/chat-with-stream-deepseek", chatWithStreamDeepseek);

export default aiRouter;

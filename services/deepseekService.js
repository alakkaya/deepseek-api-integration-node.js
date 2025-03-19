import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export const createCompletion = async (message) => {
  try {
    if (!message) {
      throw new Error("Message is required");
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a knowledgeable health coach." },
        { role: "user", content: message },
      ],
      model: "deepseek-chat:free",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(`Completion failed: ${error.message}`);
  }
};

// Add streaming support
export const createStreamingCompletion = async (message) => {
  try {
    if (!message) {
      return res.status(400).json({
        status: false,
        message: "Message is required",
      });
    }

    const stream = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a knowledgeable health coach." },
        { role: "user", content: message },
      ],
      model: "deepseek-chat", // or model:"deepseek-reasoner" according to your purpose
      stream: true,
    });

    return stream;
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Completion failed",
      error: error.message,
    });
  }
};

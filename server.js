import dotenv from "dotenv";
import app from "./app/app.js";
import http from "http";

dotenv.config();
// Connect to the database if you will use

const PORT = process.env.PORT || 2021;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

# 🚀 Deepseek API Integration Node.js

A simple Node.js application that integrates with the Deepseek AI API to provide both standard and streaming chat completions.

## ✨ Features

- Regular chat completions with Deepseek AI
- Streaming chat completions with Server-Sent Events (SSE)
- Express.js API with modular architecture


## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd deepseek-api-integration-node.js
   ```
2. Install dependencies:
   
  ```bash
    npm install
  ```
3.Add your Deepseek API key to .env file:
   ```bash
    DEEPSEEK_API_KEY=your_api_key_here
   ```
   
## 🚀 Usage

Start the server:
  ```bash
    npm start
  ```
❗️ The server will run at http://localhost:2020 by default.

## 📡  API Endpoints

### Regular Chat Completion

**Endpoint:**  
`POST /api/v1/ai/chat-with-deepseek`

**Request Body:**  
```json
{
  "message": "Your message here"
}
```
**Response:** 
- JSON containing the AI's response

### Streaming Chat Completion

**Endpoint:**  
`POST /api/v1/ai/chat-with-stream-deepseek`

**Request Body:**  
```json
{
"message": "Your message here"
} 
```
**Response:** 
- Server-Sent Events (SSE) stream of the AI's response

## 📦 Dependencies

- **express:** `^4.21.2`
- **openai:** `^4.81.0`
- **dotenv:** `^16.4.7`
- **http:** `^0.0.1-security`

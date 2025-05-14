# ⏱️ Delayed Slack Message Sender

A simple, elegant web application built with **ReactJS**, **Shadcn UI**, and **FastAPI** that lets you schedule and send messages to a Slack channel after a user-defined delay. Built as part of a coding challenge to demonstrate full-stack integration, asynchronous execution, and clean UI interaction. 🚀

---

## 💡 Overview

This project allows users to input a message, specify a delay, and send it to a Slack channel using a **Slack Incoming Webhook URL**.

Key features include:
- 🌐 Dynamic single-page UI
- 🧠 Delay management and async scheduling
- 📩 Integration with Slack webhooks
- ⚙️ Built with modern frameworks and UI libraries

---

## 🛠️ Tech Stack

| Frontend | Backend | UI Components |
|----------|---------|----------------|
| [ReactJS](https://reactjs.org/) | [FastAPI](https://fastapi.tiangolo.com/) | [Shadcn UI](https://ui.shadcn.com/) |

---

## 🖥️ Features

### ✅ User Inputs

- **Delay Input**:
  - Numeric input for delay
  - Dropdown to select unit (seconds, minutes, hours)

- **Slack Message Input**:
  - Text field to input your message

- **Slack Hook URL Input**:
  - Webhook URL input for your Slack channel

### 🧪 Button Behavior

- **"Send in XXX" Button**:
  - Updates dynamically as you enter a delay
  - Disabled until all inputs are filled
  - Sends the message *after the specified delay*

---

## ✉️ Message Format

All messages are sent in the following format:
From <Candidate Name>'s Slack Bot: <Your Message>


Example:

From Nathan's Slack Bot: Hello World


---

## 🔁 Flow & Functionality

1. Fill out all inputs: delay, unit, name, message, and webhook URL.
2. The button will display the appropriate delay ("Send in 5 minutes").
3. On click, the app waits for the delay.
4. Sends your message to the Slack channel via webhook.

---

## ⚙️ How to Run Locally

### 📦 Backend (FastAPI)

```bash
# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
🧑‍🎨 Frontend (React + Shadcn)

# Install dependencies
npm install

# Start the development server
npm run dev
```
---
🌍 Hosting <br>
The app is deployed on Vercel for ease of access and performance.

Live URL (example):<br>
➡️ https://slack-scheduler-client.vercel.app/

📌 Notes<br>
Basic validation is implemented (button disables if required fields are empty)
Simple and intuitive UI using Shadcn components
Page state is not persisted across refreshes.

🙌 Acknowledgements<br>
Thanks to the reviewers and creators of this challenge. Also leveraging:<br>
🧠 ChatGPT for ideation and troubleshooting <br>
🖼️ Shadcn for beautiful and accessible UI components

🧑‍💻 Author<br>
Nathanielle Romero

GitHub: https://github.com/nathaniellers

LinkedIn: [Nathanielle Romero](https://www.linkedin.com/in/nathanielle-romero-a2580020a/)

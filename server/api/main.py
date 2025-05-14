from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://slack-scheduler-client.vercel.app"],  # Allow your client's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessagePayload(BaseModel):
    delay: int
    name: str
    unit: str
    text: str
    webhook_url: str

async def send_slack_message(payload: MessagePayload):
    delay_seconds = payload.delay * {"seconds": 1, "minutes": 60, "hours": 3600}.get(payload.unit, 1)
    await asyncio.sleep(delay_seconds)
    message = f"From: {payload.name}'s Slack Bot: {payload.text}"
    async with httpx.AsyncClient() as client:
        await client.post(payload.webhook_url, json={"text": message})

@app.get("/")
async def health_check():
    return "Successful health check"

@app.options("/send")
async def schedule_message():
    return {"status": 200}

@app.post("/send")
async def schedule_message(payload: MessagePayload, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_slack_message, payload)
    return {
        "status": 200,
        "message": "Scheduled"    
    }

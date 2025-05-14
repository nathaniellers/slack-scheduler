import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select"

const timeUnits = {
  seconds: 1000,
  minutes: 60000,
  hours: 3600000,
}

export default function App() {
  const [delay, setDelay] = useState("")
  const [unit, setUnit] = useState("minutes")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [hookUrl, setHookUrl] = useState("")

  const delayText = delay ? `Send in ${delay} ${unit}` : "Send"
  const disabled = !(delay && unit && message && hookUrl)

  const handleSend = async () => {
    try {
      const API_BASE_URL = "https://slack-scheduler-server.vercel.app"
      const response = await fetch(`${API_BASE_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delay, unit, name, text:message, webhook_url:hookUrl }),
      })

      if (response.status === 200) {
        alert("Scheduled!")
        setDelay('');
        setUnit('seconds'); // or default unit
        setMessage('');
        setName('');
        setHookUrl('');
      } else {
        const errorData = await response.json();
        alert(`Failed: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Slack Scheduler</h1>

        <div className="space-y-2">
          <Label htmlFor="delay">Delay</Label>
          <div className="flex gap-2">
            <Input
              id="delay"
              type="number"
              placeholder="Delay"
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              className="flex-1"
            />
            <Select value={unit} onValueChange={setUnit}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seconds">Seconds</SelectItem>
                <SelectItem value="minutes">Minutes</SelectItem>
                <SelectItem value="hours">Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Slack Message</Label>
          <Input
            id="message"
            type="text"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hookUrl">Slack Webhook URL</Label>
          <Input
            id="hookUrl"
            type="text"
            placeholder="https://hooks.slack.com/..."
            value={hookUrl}
            onChange={(e) => setHookUrl(e.target.value)}
          />
        </div>

        <Button
          disabled={disabled}
          onClick={handleSend}
          className="w-full"
        >
          {delayText}
        </Button>
      </div>
    </div>
  )
}

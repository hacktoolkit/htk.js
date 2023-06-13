import "dotenv/config";

const DEFAULT_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export function slackDebug(msg, webhook_url) {
  const url = webhook_url || DEFAULT_WEBHOOK_URL;

  const text = typeof msg === "object" ? JSON.stringify(msg) : msg;

  const res = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  });
}

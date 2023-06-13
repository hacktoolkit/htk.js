// import "dotenv/config";

export const DEBUG_PORT = process.env.DEBUG_PORT || 13370;
export const SLACK_WEBHOOK_URL =
  process.env.SLACK_WEBHOOK_URL || `http://localhost:${DEBUG_PORT}/`;

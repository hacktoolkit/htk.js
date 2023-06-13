import "dotenv/config";
import fetch from "node-fetch";

import { DEBUG_PORT } from "./config.js";

export function localhostDebug(msg) {
  const url = `http://localhost:${DEBUG_PORT}`;
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

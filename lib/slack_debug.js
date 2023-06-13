"use strict";

import fetch from "node-fetch";

import { SLACK_WEBHOOK_URL } from "./config.js";

export function slackDebug(msg, webhook_url) {
  const url = webhook_url || SLACK_WEBHOOK_URL;

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

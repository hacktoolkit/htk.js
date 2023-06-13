// test/script.js

import { slackDebug } from "htk.js";
import { fdb } from "htk.js/fdebug";

fdb(`Hello world, 'fdb' works! The current local time is ${new Date()}.`);

slackDebug(
  "Hello world, `slack_debug` works! The current local time is " +
    `${new Date()}.`
);

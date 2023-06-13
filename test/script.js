// test/script.js

import { localhostDebug, slackDebug } from "htk.js";
import { fdb } from "htk.js/fdebug";

fdb(`Hello world, 'fdb' works! The current local time is ${new Date()}.`);

localhostDebug(
  "Hello world, `localhostDebug` works! The current local time is " +
    `${new Date()}.`
);

slackDebug(
  "Hello world, `slackDebug` works! The current local time is " +
    `${new Date()}.`
);

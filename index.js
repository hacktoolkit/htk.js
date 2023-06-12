"use strict";

import { createWriteStream } from "fs";

const DEFAULT_FILENAME = "/tmp/fdebug.log";

const Counter = {
  count: 0,
};

export function fdebug(msg, filename) {
  const outputFilename = filename || DEFAULT_FILENAME;
  const writeStream = createWriteStream(outputFilename);

  ++Counter.count;
  const now = new Date();

  const text = typeof msg === "object" ? JSON.stringify(msg) : msg;

  writeStream.write(`>>>>>>>>>> FDEBUG ${Counter.count} ${now} >>>>>>>>>>\n`);
  writeStream.write(text + "\n");
  writeStream.write(`<<<<<<<<<< FDEBUG ${Counter.count} ${now} <<<<<<<<<<\n`);
}

export const fdb = fdebug;

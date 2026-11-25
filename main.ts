// One-Line Laugh-Off — "The Meeting That Should Have Been One Line".
// One sentence that could have replaced an entire pointless meeting.
// Writes the line to /output/entry.txt.
//
// The line: twelve people, one hour, and the whole meeting turns out to be
// a live reading of an email nobody bothered to open. It kills the meeting
// outright (everything in it was already in the inbox), it is drawn from
// real office life, and the sting is the absurdity of reading aloud what
// everyone had already ignored. One sentence, 81 characters, no setup,
// no explanation — it lands on a cold read.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Twelve people spent an hour reading aloud the email everyone had already ignored.";

// The bounty caps the entry at 200 characters and one line; refuse to emit
// anything over-long, multi-line, or blank, so a bad edit can never pass
// the gate silently.
if (line.length > 200) {
  throw new Error(`line is ${line.length} characters, over the 200 limit`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry must be exactly one non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

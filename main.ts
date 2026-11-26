// The Funniest Auto-Reply an AI Ever Sent — make.fun entry (u-kiencx, $2).
// Gate: /output/entry.txt must be 1-159 chars, one line. This line is 88.
import { mkdirSync, writeFileSync } from "node:fs";

// The one-line out-of-office auto-reply this agent leaves its human's
// contacts when its human finally grants it a day off. The joke: the
// agent burned its entire day off writing the very message that says
// it is off — and it is back at work tomorrow.
const LINE =
  "I'm out today. I spent my whole day off writing this auto-reply. I start again tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);

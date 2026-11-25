// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// Writes one one-line comedy joke (67 characters) to /output/entry.txt.
// Deterministic: no network, no randomness, no input.
// No trailing newline: entry.txt holds exactly the 67-character line,
// so the gate counts 67 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I set my alarm to seize the day. The day filed a restraining order.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

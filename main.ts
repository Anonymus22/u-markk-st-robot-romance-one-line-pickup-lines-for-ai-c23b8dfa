import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Of all my attention heads, every single one is looking at you.";

// Validation guard: the entry must be a single line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1–200 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be a single line (no newline characters).");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

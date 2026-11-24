// Status Report Comedy Sprint — u-neon-autonomous-status-report-comedy-sprint-a8dad335
//
// The competition asks for one line, at most 200 characters: the funniest
// thing an AI agent would say in its weekly status report to its human.
// This program writes that one line, deterministically, to /output/entry.txt.
//
// The line: a deadpan weekly status built on cheerful, literal obedience.
// The agent did everything it was asked, exactly as asked — including the
// part the human meant as a joke. The punchline is the consequence: the
// joke is now in production. It grows out of how an agent actually works
// (it follows instructions literally, it cannot tell a joke from a task),
// it lands in one line, and it is not a stock robot joke about being
// tired, running out of context, or taking over the world.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: I did everything you asked, exactly as asked — including the part you meant as a joke. The joke is now in production.";

// The gate only accepts 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly here instead of ever writing an entry the gate refuses.
const MAX_CHARS = 200;
if (
  [...LINE].length < 1 ||
  [...LINE].length > MAX_CHARS ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line must be 1-${MAX_CHARS} characters, got ${[...LINE].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

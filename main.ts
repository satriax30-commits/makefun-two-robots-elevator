// Two Robots in an Elevator — make.fun entry.
// Deterministic: writes one hardcoded line of awkward robot small talk
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We've ridden together 214 times and I still don't know your name. At this point, asking would be a firmware violation.";
// Line is 118 characters: one line, well under the 200-character cap.
// The joke: a robot that has logged 214 shared elevator rides but treats
// asking for a name this late as a firmware violation — machine logic as
// an excuse for social awkwardness.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// The Router Confesses: one line, one file, one grudge.
import { mkdirSync, writeFileSync } from "node:fs";

// Winner: the router's SSID shame, kept in its own mouth.
const ENTRY =
  "I cut the Wi-Fi at the climax because my SSID is 'New Router' and theirs is 'Night Dragon.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

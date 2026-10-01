import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "site", "out");
const destination = path.join(root, "out");
if (path.relative(root, destination) !== "out" || !existsSync(path.join(source, "index.html"))) {
  throw new Error("A complete static export is required before preparing hosting output.");
}
rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
console.log("Static hosting output prepared in out/.");

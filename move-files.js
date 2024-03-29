import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
async function run() {
  try {
    const distPath = path.resolve(__dirname, "dist");
    const theme1Path = path.join(distPath, "theme");
    const theme2Path = path.join(theme1Path, "theme");

    const theme1Exists = await fs.pathExists(theme1Path);
    const theme2Exists = await fs.pathExists(theme2Path);

    if (theme1Exists && theme2Exists) {
      // Move files from theme2 to theme1
      await fs.copy(theme2Path, theme1Path, { overwrite: false });

      // Delete the empty theme2 folder
      await fs.remove(theme2Path);
    }
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}
run();

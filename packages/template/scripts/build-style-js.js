import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

export async function wrapCSSInJS() {
  const cssFilePath = resolve(process.cwd(), "./dist/style.css");
  const jsFilePath = resolve(process.cwd(), "./dist/style.js");

  try {
    const cssContent = await readFile(cssFilePath, "utf8");
    // const jsContent = `export const content = \`${cssContent.replace(/`/g, '\\`')}\`;`;
    const jsContent = `export const content = \`${cssContent.replace(/\\/g, "\\\\").replace(/`/g, "\\`")}\`;`;
    await writeFile(jsFilePath, jsContent);
    console.log("style.js created successfully.");
  } catch (error) {
    console.error("Failed to process CSS file:", error);
  }
}

wrapCSSInJS();

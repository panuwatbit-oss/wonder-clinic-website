import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/wonder-clinic-website";
const textExtensions = new Set([".html", ".js", ".json", ".css", ".txt", ".xml"]);
const internalPrefixes = [
  "media",
  "brand",
  "services",
  "promotions",
  "reviews",
  "articles",
  "about",
  "contact",
  "og.webp",
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(entryPath));
    else files.push(entryPath);
  }

  return files;
}

function prefixInternalUrls(source) {
  let result = source;
  for (const prefix of internalPrefixes) {
    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(
      new RegExp(`([\"'])/${escapedPrefix}`, "g"),
      `$1${basePath}/${prefix}`,
    );
  }

  result = result.replaceAll('href="/"', `href="${basePath}/"`);
  result = result.replaceAll('href:\"/\"', `href:\"${basePath}/\"`);
  return result;
}

for (const file of await walk(outputDirectory)) {
  if (!textExtensions.has(path.extname(file))) continue;
  const source = await readFile(file, "utf8");
  const prepared = prefixInternalUrls(source);
  if (prepared !== source) await writeFile(file, prepared);
}

await writeFile(path.join(outputDirectory, ".nojekyll"), "");

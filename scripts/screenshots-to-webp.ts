import { Glob } from "bun";
import { rm } from "node:fs/promises";
import { extname } from "node:path";

const ROOT = "src/assets/screenshots";
const MAX_EDGE = 1600;
const QUALITY = 80;

const glob = new Glob("**/*");
const SOURCE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

let converted = 0;
for await (const rel of glob.scan(ROOT)) {
  if (!SOURCE_EXTS.has(extname(rel).toLowerCase())) continue;
  const input = `${ROOT}/${rel}`;
  const output = input.slice(0, -extname(input).length) + ".webp";

  const before = Bun.file(input).size;

  await Bun.file(input)
    .image()
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .write(output);

  await rm(input);
  converted++;

  const after = Bun.file(output).size;
  const kb = (n: number) => `${Math.round(n / 1024)} КБ`;
  console.log(`✓ ${rel} → ${kb(before)} → ${kb(after)}`);
}

console.log(
  converted ? `Готово: сконвертировано ${converted} изобр.` : "Исходников для конвертации не найдено.",
);

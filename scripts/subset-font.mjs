// src/ 안의 문구에 실제로 쓰인 글자만 담은 Pretendard 가변 폰트를 만든다.
// 문구가 모두 코드에 고정된 한 페이지 사이트라, 한글 전체(2MB) 대신 필요한 글자만 내려받게 한다.
// prebuild·predev에서 자동 실행된다. 수동 실행: npm run fonts:subset
import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";
import subsetFont from "subset-font";

const root = process.cwd();
const srcDir = join(root, "src");
const sourceFont = join(root, "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2");
const outFile = join(root, "src/fonts/pretendard-subset.woff2");

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(full);
      return [".ts", ".tsx"].includes(extname(entry.name)) ? [full] : [];
    }),
  );
  return files.flat();
}

// 영문·숫자·기본 기호는 문구 변경과 상관없이 항상 포함한다
const baseChars = Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) => String.fromCharCode(0x20 + i)).join("");
const extraChars = "·‘’“”…©→←×–—";

const files = await collectFiles(srcDir);
// 한국어 주석의 글자까지 넣지 않도록 주석을 지운다 (URL의 "://"는 남김)
const stripComments = (code) =>
  code.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
const sourceText = (await Promise.all(files.map((file) => readFile(file, "utf8"))))
  .map(stripComments)
  .join("");
const usedChars = new Set(baseChars + extraChars);
for (const char of sourceText) {
  if (char.codePointAt(0) > 0x7e) usedChars.add(char);
}
const text = [...usedChars].join("");

// 가변 축(weight)을 그대로 유지해 굵기 100~900을 모두 쓸 수 있게 한다
const subset = await subsetFont(await readFile(sourceFont), text, { targetFormat: "woff2" });

await mkdir(join(root, "src/fonts"), { recursive: true });
await writeFile(outFile, subset);
console.log(`[fonts] ${usedChars.size}자 → ${outFile.replace(root, ".")} (${(subset.length / 1024).toFixed(1)}KB)`);

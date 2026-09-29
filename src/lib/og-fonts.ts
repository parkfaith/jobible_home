import { readFile } from "node:fs/promises";
import { join } from "node:path";

// ImageResponse(satori)는 woff2를 읽지 못하므로 Pretendard OTF를 빌드 시점에 읽는다
const fontDir = join(process.cwd(), "node_modules/pretendard/dist/public/static");

export async function loadPretendard() {
  const [regular, bold, extraBold] = await Promise.all([
    readFile(join(fontDir, "Pretendard-Regular.otf")),
    readFile(join(fontDir, "Pretendard-Bold.otf")),
    readFile(join(fontDir, "Pretendard-ExtraBold.otf")),
  ]);
  return [
    { name: "Pretendard", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Pretendard", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Pretendard", data: extraBold, weight: 800 as const, style: "normal" as const },
  ];
}

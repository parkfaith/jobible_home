import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/logo-mark";
import { loadPretendard } from "@/lib/og-fonts";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<LogoMark size={size.width} />, {
    ...size,
    fonts: await loadPretendard(),
  });
}

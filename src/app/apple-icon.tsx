import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/logo-mark";
import { loadPretendard } from "@/lib/og-fonts";
import { colors } from "@/lib/tokens";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS 홈 화면은 모서리를 자동으로 둥글게 자르므로 흰 바탕 위에 원형 로고를 둔다
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: colors.canvas,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoMark size={140} />
      </div>
    ),
    { ...size, fonts: await loadPretendard() },
  );
}

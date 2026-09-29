import { ImageResponse } from "next/og";
import { brand, hero, site } from "@/data/projects";
import { LogoMark } from "@/lib/logo-mark";
import { loadPretendard } from "@/lib/og-fonts";
import { colors } from "@/lib/tokens";

export const alt = `${brand} · ${hero.titleLead}${hero.titleEmphasis} ${hero.titleTail}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 공유 카드: 흰 바탕, 워드마크, 배지, Hero 제목(플럼 강조), 만든 사람
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: colors.canvas,
          color: colors.ink,
          fontFamily: "Pretendard",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LogoMark size={48} />
          <div style={{ fontSize: 36, fontWeight: 700, color: colors.coralStrong, letterSpacing: -0.6 }}>
            {brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              background: colors.coralTint,
              color: colors.coralInk,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: colors.coral }} />
            {hero.badge}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>
              {hero.titleLead}
              <span style={{ color: colors.plum, marginLeft: 20 }}>{hero.titleEmphasis}</span>
            </div>
            <div>{hero.titleTail}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: `2px solid ${colors.hairline}`,
            paddingTop: 24,
            fontSize: 26,
            color: colors.muted,
          }}
        >
          {site.ogCaption}
        </div>
      </div>
    ),
    { ...size, fonts: await loadPretendard() },
  );
}

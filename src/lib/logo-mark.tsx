import { colors } from "./tokens";

// 코랄 원 + 흰 "j" 로고 (Nav 로고와 같은 모양, 아이콘·OG 이미지 공용)
export function LogoMark({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: colors.coral,
        color: colors.canvas,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Pretendard",
        fontWeight: 800,
        fontSize: Math.round(size * 0.56),
        // 소문자 j의 아래 획 때문에 시각 중심을 살짝 올린다
        paddingBottom: Math.round(size * 0.06),
      }}
    >
      j
    </div>
  );
}

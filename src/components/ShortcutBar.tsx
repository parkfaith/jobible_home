import { hero } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 9h10M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 각 칸은 해당 서비스 카드(id = slug)로 이동한다
export default function ShortcutBar() {
  const { shortcuts } = hero;

  return (
    <nav aria-label="서비스 바로가기" className="mt-4 w-full md:w-auto">
      {/* 태블릿·데스크톱: 가로 원형 바 */}
      <div className="hidden h-[72px] items-center rounded-full border border-hairline bg-canvas px-2 shadow-float md:inline-flex">
        {shortcuts.map((item, index) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={`flex flex-col items-start gap-0.5 px-7 text-left ${
              index < shortcuts.length - 1 ? "border-r border-hairline-soft" : ""
            }`}
          >
            <span className="text-xs font-bold">{item.label}</span>
            <span className="text-sm text-muted">{item.caption}</span>
          </a>
        ))}
        <a
          href="#services"
          aria-label="서비스 보기"
          className="ml-2 flex size-[52px] items-center justify-center rounded-full bg-coral-strong text-white"
        >
          <ArrowIcon />
        </a>
      </div>

      {/* 모바일: 세로 카드 + 전체폭 버튼 */}
      <div className="flex flex-col gap-3 md:hidden">
        <ul className="divide-y divide-hairline-soft rounded-card border border-hairline bg-canvas shadow-float">
          {shortcuts.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className="flex min-h-14 items-center justify-between gap-4 px-5 py-3 text-left"
              >
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-sm text-muted">{item.caption}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#services"
          className="flex h-12 items-center justify-center gap-2 rounded-button bg-coral-strong text-base font-semibold text-white"
        >
          서비스 둘러보기
          <ArrowIcon />
        </a>
      </div>
    </nav>
  );
}

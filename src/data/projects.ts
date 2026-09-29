// 홈페이지의 모든 콘텐츠. 서비스를 추가·수정할 때는 이 파일만 고친다.

// 브랜드 표기는 대소문자를 지켜 joBiBle_ 로 쓴다
export const brand = "joBiBle_";

export type ProjectStatus = "live" | "paused";

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** 스크린샷 위 흰 배지 문구 (운영 중 서비스만) */
  badge?: string;
  /** 예: '낙원제일교회 · Next.js, Turso' */
  meta?: string;
  description: string;
  /** 공개 URL. 비어 있으면 카드를 링크로 만들지 않는다. */
  url?: string;
  /** '/screens/onspot.png' 형식. 비어 있으면 회색 자리표시를 보여준다. */
  image?: string;
  /** 스크린샷 alt 텍스트 */
  imageAlt?: string;
}

export interface Shortcut {
  label: string;
  caption: string;
  /** 이동할 서비스 카드의 slug */
  target: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const liveProjects: Project[] = [
  {
    slug: "onspot",
    name: "joBiBle_onspot",
    status: "live",
    badge: "교회에서 실제 사용 중",
    // 저장소 기준 Prisma + SQLite (HANDOFF 초안의 Turso는 저장소에서 확인되지 않음)
    meta: "낙원제일교회 · Next.js, SQLite",
    description:
      "교회 시설과 차량 예약을 한곳에서 관리합니다. 승인 결과는 카카오 알림톡으로 받습니다.",
    url: "https://booking.i-nakwon.com",
    // 공개 예약 첫 화면 (개인정보 없음)
    image: "/screens/onspot.png",
    imageAlt: "joBiBle_onspot 공간 예약 화면. 말로 예약하기 버튼과 안내 문구가 보인다.",
  },
  {
    slug: "way",
    name: "joBiBle_way",
    status: "live",
    badge: "제자훈련반 참고",
    meta: "제자훈련 · React, Hono, Turso",
    description: "제자훈련 과정에서 필요한 참고 자료를 한곳에 정리한 페이지입니다.",
    url: "https://jobible-way.vercel.app",
    image: "/screens/way.png",
    imageAlt: "joBiBle_way 시작 화면. '제자의 길을 걷는 여정' 문구와 시작하기 버튼이 보인다.",
  },
  {
    slug: "goldendays",
    name: "joBiBle_goldendays",
    status: "live",
    badge: "시니어를 위한 글귀",
    meta: "시니어 · React, Vite, PWA",
    description:
      "아버지 같은 시니어 세대를 위해 매일 좋은 글귀를 모아 전합니다. 큰 글씨, 단순한 화면.",
    url: "https://jobible-golden-days.vercel.app",
    image: "/screens/goldendays.png",
    imageAlt: "joBiBle_goldendays 오늘의 이야기 화면. 날씨 배너와 큰 글씨 성경 구절 카드가 보인다.",
  },
];

export const pastProjects: Project[] = [
  {
    slug: "soulscribe",
    name: "joBiBle_soulscribe",
    status: "paused",
    description: "매일 명언을 필사하며 영어를 익히는 학습 앱",
    image: "/icons/soulscribe.png",
  },
  {
    slug: "bizeng",
    name: "joBiBle_bizeng",
    status: "paused",
    description: "영어 면접 대비를 위한 비즈니스 영어 연습 앱",
    image: "/icons/bizeng.png",
  },
];

export const hero = {
  badge: `${liveProjects.length}개 서비스 운영 중`,
  titleLead: "작지만, ",
  titleEmphasis: "실제로 쓰이는",
  titleTail: "서비스를 만듭니다",
  subtitle:
    "기업 AI 에이전트를 설계하는 박준형이 교회와 가족, 일상의 작은 문제를 풀려고 퇴근 후 만들어 온 joBiBle_ 시리즈입니다.",
  shortcuts: [
    { label: "교회", caption: "시설·차량 예약", target: "onspot" },
    { label: "제자훈련", caption: "참고 자료", target: "way" },
    { label: "시니어", caption: "매일 좋은 글귀", target: "goldendays" },
  ] satisfies Shortcut[],
};

export const servicesSection = {
  title: "운영 중인 서비스",
  tagline: "필요한 사람 곁에서 시작했습니다",
  liveLabel: "운영 중",
  placeholderLabel: "스크린샷",
};

export const archiveSection = {
  title: "지난 실험들",
  pausedLabel: "휴식 중",
};

export const about = {
  name: "박준형",
  initial: "준",
  role: "AX Team Lead",
  // TODO(owner): (선택) 아바타 사진 경로. 비어 있으면 이니셜 원형을 보여준다.
  avatar: undefined as string | undefined,
  stats: [
    { value: "21년+", label: "IT 경력" },
    { value: String(liveProjects.length), label: "운영 중 서비스" },
    { value: String(liveProjects.length + pastProjects.length), label: "joBiBle_ 시리즈" },
  ] satisfies Stat[],
  title: "만든 사람을 소개합니다",
  intro:
    "에이다루트에서 대기업 AI 에이전트 프로젝트를 이끌고 있습니다. LangChain, LangGraph, RAG, Vector DB로 일하고, 회사에서 배운 것을 주말에 작게 만들어 봅니다. 그중 쓸모 있는 것은 계속 운영합니다.",
  email: "parkfaith75@gmail.com",
  linkedin: {
    href: "https://www.linkedin.com/in/ryanpark75korea/",
    label: "linkedin.com/in/ryanpark75korea",
  },
};

// 상단 메뉴·푸터에서 함께 쓰는 앵커 링크
export const navLinks = [
  { label: "서비스", href: "#services" },
  { label: "보관함", href: "#archive" },
  { label: "About", href: "#about" },
];

export const footer = {
  copyright: "© 2026 박준형 · joBiBle_",
  links: navLinks.filter((link) => link.href !== "#archive"),
};

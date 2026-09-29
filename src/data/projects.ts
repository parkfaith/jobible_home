// 홈페이지의 모든 콘텐츠. 서비스를 추가·수정할 때는 이 파일만 고친다.

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
    name: "jobible_onspot",
    status: "live",
    badge: "교회에서 실제 사용 중",
    meta: "낙원제일교회 · Next.js, Turso",
    description:
      "교회 시설과 차량 예약을 한곳에서 관리합니다. 승인 결과는 카카오 알림톡으로 받습니다.",
    // TODO(owner): 공개 URL
    url: undefined,
    // TODO(owner): public/screens/onspot.png (1600×1200, 개인정보가 안 보이는 화면)
    image: undefined,
    imageAlt: "jobible_onspot 시설·차량 예약 화면",
  },
  {
    slug: "way",
    name: "jobible_way",
    status: "live",
    badge: "제자훈련반 참고",
    // TODO(owner): 기술 스택 확인 후 교체
    meta: "제자훈련 · [기술 스택]",
    description: "제자훈련 과정에서 필요한 참고 자료를 한곳에 정리한 페이지입니다.",
    // TODO(owner): 공개 URL
    url: undefined,
    // TODO(owner): public/screens/way.png
    image: undefined,
    imageAlt: "jobible_way 제자훈련 참고 자료 화면",
  },
  {
    slug: "goodday",
    name: "jobible_goodday",
    status: "live",
    badge: "시니어를 위한 글귀",
    // TODO(owner): 기술 스택 확인 후 교체
    meta: "시니어 · [기술 스택]",
    description:
      "아버지 같은 시니어 세대를 위해 매일 좋은 글귀를 모아 전합니다. 큰 글씨, 단순한 화면.",
    // TODO(owner): 공개 URL
    url: undefined,
    // TODO(owner): public/screens/goodday.png
    image: undefined,
    imageAlt: "jobible_goodday 오늘의 글귀 화면",
  },
];

export const pastProjects: Project[] = [
  {
    slug: "soulscribe",
    name: "jobible_soulscribe",
    status: "paused",
    description: "매일 명언을 필사하며 영어를 익히는 학습 앱",
  },
  {
    slug: "bizeng",
    name: "jobible_bizeng",
    status: "paused",
    description: "영어 면접 대비를 위한 비즈니스 영어 연습 앱",
  },
];

export const hero = {
  badge: `${liveProjects.length}개 서비스 운영 중`,
  titleLead: "작지만, ",
  titleEmphasis: "실제로 쓰이는",
  titleTail: "서비스를 만듭니다",
  subtitle:
    "기업 AI 에이전트를 설계하는 박준형이 교회와 가족, 일상의 작은 문제를 풀려고 퇴근 후 만들어 온 jobible_ 시리즈입니다.",
  shortcuts: [
    { label: "교회", caption: "시설·차량 예약", target: "onspot" },
    { label: "제자훈련", caption: "참고 자료", target: "way" },
    { label: "시니어", caption: "매일 좋은 글귀", target: "goodday" },
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
    { value: String(liveProjects.length + pastProjects.length), label: "jobible_ 시리즈" },
  ] satisfies Stat[],
  title: "만든 사람을 소개합니다",
  intro:
    "에이다루트에서 대기업 AI 에이전트 프로젝트를 이끌고 있습니다. LangChain, LangGraph, RAG, Vector DB로 일하고, 회사에서 배운 것을 주말에 작게 만들어 봅니다. 그중 쓸모 있는 것은 계속 운영합니다.",
  // TODO(owner): 공개할 이메일 주소
  email: undefined as string | undefined,
  // TODO(owner): LinkedIn URL
  linkedin: undefined as string | undefined,
};

export const footer = {
  copyright: "© 2026 박준형 · jobible_",
};

// 상단 메뉴·푸터에서 함께 쓰는 앵커 링크
export const navLinks = [
  { label: "서비스", href: "#services" },
  { label: "보관함", href: "#archive" },
  { label: "About", href: "#about" },
];

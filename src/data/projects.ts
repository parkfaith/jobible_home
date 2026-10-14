// 홈페이지의 모든 콘텐츠. 서비스를 추가·수정할 때는 이 파일만 고친다.

// 브랜드 표기는 대소문자를 지켜 joBiBle_ 로 쓴다
export const brand = "joBiBle_";

// 검색·공유 메타데이터
export const site = {
  title: `${brand} · 박준형`,
  // OG 이미지·공유 카드에 쓰는 짧은 소개
  ogCaption: "박준형 · AX Team Lead",
  locale: "ko_KR",
  // 운영은 Vercel 환경변수 NEXT_PUBLIC_SITE_URL=https://jobible.co.kr
  // 비어 있으면 Vercel 배포 주소, 로컬에서는 localhost를 쓴다
  url: process.env.NEXT_PUBLIC_SITE_URL,
};

export type ProjectStatus = "live" | "paused";

/** 서비스 상세 페이지에 보여줄 내용 */
export interface ProjectDetail {
  /** 누가 쓰는지 */
  audience: string;
  /** 해결하려는 문제 / 만든 이유 */
  problem: string;
  /** 주요 기능 (3~6개) */
  features: string[];
  /** 기술 스택 */
  stack: string[];
}

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
  /** 있으면 서비스 상세 페이지(/services/[slug])를 만든다. */
  detail?: ProjectDetail;
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
    // TODO(owner): 상세 문구는 스크린샷과 기존 설명을 근거로 쓴 초안. 검수 필요.
    detail: {
      audience: "낙원제일교회에서 공간과 차량을 예약하려는 교인",
      problem:
        "시설과 차량 예약을 한곳에서 받고 관리하려고 만들었습니다. 설치 없이 QR 코드로 바로 들어와 공간이든 차량이든 예약할 수 있고, 승인 결과는 카카오 알림톡으로 전달됩니다.",
      features: [
        "공간 예약: 날짜를 고르고 비어 있는 공간을 바로 예약",
        "차량 예약: 시설뿐 아니라 교회 차량도 같은 서비스에서 예약",
        "말로 예약하기: 말씀하시면 공간·날짜·시간·목적을 채워 줍니다",
        "타이핑으로 예약하기, 내 예약 확인",
        "승인 결과를 카카오 알림톡으로 안내",
        "앱 설치 없이 QR 코드로 바로 접속",
      ],
      stack: ["Next.js", "Prisma", "SQLite"],
    },
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
    // TODO(owner): 상세 문구는 스크린샷과 기존 설명을 근거로 쓴 초안. 검수 필요.
    detail: {
      audience: "낙원제일교회 제2기 제자훈련에 참여하는 훈련생",
      problem:
        "32주 동안 이어지는 제자훈련의 기록이 흩어지지 않도록 한곳에 모았습니다. 훈련 중에 필요한 자료를 따로 찾지 않고 이 페이지에서 이어서 볼 수 있습니다.",
      features: [
        "설교 노트와 신앙 일기 기록",
        "성구 암송 정리",
        "일일 체크로 훈련 흐름 이어가기",
        "홈 화면에 추가해 앱처럼 열기",
      ],
      stack: ["React", "Hono", "Turso"],
    },
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
    // TODO(owner): 상세 문구는 스크린샷과 기존 설명을 근거로 쓴 초안. 검수 필요.
    detail: {
      audience: "큰 글씨와 단순한 화면이 편한 시니어 세대",
      problem:
        "아버지 같은 시니어 세대가 좋은 글귀를 어렵지 않게 만나도록 만들었습니다. 복잡한 메뉴 없이 오늘의 이야기만 크게 보여 주고, 자료는 정기적으로 새로 채웁니다.",
      features: [
        "오늘의 이야기: 글귀·명언·말씀 카드를 한 화면에서",
        // TODO(owner): 업데이트 주기(일주일에 두 번?)를 확인해 문구에 반영
        "자료는 정기적으로 업데이트",
        "한 장씩 읽기 쉬운 큰 글씨 카드",
        "오늘의 날씨 안내",
        "홈 화면에 추가해 앱처럼 열기 (PWA)",
      ],
      stack: ["React", "Vite", "PWA"],
    },
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
  directLink: "바로 열기",
};

// 서비스 상세 페이지(/services/[slug])의 고정 UI 문구
export const serviceDetailPage = {
  back: "전체 서비스",
  openLive: "운영 화면 열기",
  audienceTitle: "이런 분들이 씁니다",
  problemTitle: "만든 이유",
  featuresTitle: "주요 기능",
  stackTitle: "기술 스택",
  othersTitle: "다른 서비스",
};

export const archiveSection = {
  title: "지난 실험들",
  pausedLabel: "휴식 중",
};

export const about = {
  name: "박준형",
  initial: "준",
  role: "AX Team Lead",
  // 딸이 그려 준 캐릭터 그림(머리·목까지 잘라 원형 프레임에 맞춤). 비어 있으면 이니셜 원형을 보여준다.
  avatar: "/avatar.png" as string | undefined,
  stats: [
    { value: "21년+", label: "IT 경력" },
    { value: String(liveProjects.length), label: "운영 중 서비스" },
    { value: String(liveProjects.length + pastProjects.length), label: "joBiBle_ 시리즈" },
  ] satisfies Stat[],
  title: "만든 사람을 소개합니다",
  // LinkedIn 소개(2026-09 기준)를 요약. 경력 시작 2004-11 → 통계 "21년+"
  intro:
    "20년 넘게 개발자와 PM으로 일해 왔고, 지금은 에이다루트에서 대기업·엔터프라이즈 고객을 위한 LLM 기반 AI Agent 프로젝트를 제안부터 기획·구축·운영까지 이끌고 있습니다. AI Agent, RAG, LangChain으로 일하며 회사에서 배운 것을 주말에 작게 만들어 봅니다. 그중 쓸모 있는 것은 계속 운영합니다.",
  // 의뢰 문의 안내 (About 하단 박스)
  inquiry: {
    title: "의뢰 문의",
    lead: "만들고 싶은 서비스가 있다면 메일로 알려 주세요. 아래 세 가지만 적어 주시면 답변이 빨라집니다.",
    items: ["어떤 일을 해결하고 싶은지", "누가 쓰는지", "희망 시기"],
  },
  email: "parkfaith75@gmail.com",
  linkedin: {
    href: "https://www.linkedin.com/in/ryanpark75korea/",
    label: "linkedin.com/in/ryanpark75korea",
  },
};

// 상단 메뉴·푸터에서 함께 쓰는 앵커 링크. 상세 페이지에서도 메인으로 돌아오도록 "/#"로 시작한다
export const navLinks = [
  { label: "서비스", href: "/#services" },
  { label: "보관함", href: "/#archive" },
  { label: "About", href: "/#about" },
  { label: "문의", href: "/#contact" },
];

export const footer = {
  copyright: "© 2026 박준형 · joBiBle_",
  links: navLinks.filter((link) => link.href !== "/#archive" && link.href !== "/#contact"),
};

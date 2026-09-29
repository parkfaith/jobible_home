# HANDOFF — jobible_ 개인 홈페이지

> 기획·디자인 단계(Claude 데스크톱 앱)에서 확정된 내용을 구현 단계(Claude Code CLI)로 넘기는 문서.
> 작성: 2026-09-29

## 0. CLI에 처음 붙여넣을 프롬프트

```
이 폴더에서 jobible_ 개인 홈페이지를 구현한다.
먼저 HANDOFF.md, CLAUDE.md, docs/design/DESIGN.md를 읽고,
docs/design/mockup-desktop.html을 디자인 기준으로 삼는다.

1단계만 진행하고 멈춰라:
- Next.js(App Router, TypeScript) + Tailwind CSS 프로젝트를 이 폴더에 생성
- DESIGN.md의 색상 토큰과 타이포그래피를 Tailwind 테마로 등록
- Pretendard 적용
- src/data/projects.ts에 HANDOFF.md 4장의 콘텐츠를 데이터로 정의
- 빈 섹션 뼈대(Nav, Hero, Services, Archive, About, Footer)까지만

완료 후 생성·변경 파일 목록과 다음 단계 계획을 보고하라.
```

이후 단계는 6장 순서대로 한 단계씩 지시한다.

## 1. 목표

jobible_ 시리즈(가족·교회·일상의 문제를 푸는 개인 서비스)를 소개하는 **한 페이지짜리 개인 홈페이지**.
포지셔닝: 사이드 프로젝트 모음이 아니라 **"실제로 쓰이는 서비스를 만드는 사람"**.
거창하지 않게, 운영 중인 서비스 3개를 중심으로 보여준다.

## 2. 확정된 결정

| 항목 | 결정 | 이유 |
|---|---|---|
| 프레임워크 | Next.js (App Router) + TypeScript | 기존 jobible 프로젝트(soulscribe, onspot)와 같은 스택 |
| 스타일 | Tailwind CSS | 빠른 반복, 토큰 관리 |
| 백엔드·DB | 없음 | 정적 콘텐츠만. CMS도 두지 않음 |
| 콘텐츠 관리 | `src/data/projects.ts` 한 파일 | 서비스 추가 시 이 파일만 수정 |
| 호스팅 | Vercel (무료 티어) | 기존 PHP+MySQL 호스팅은 Node 앱 불가 |
| 도메인 | 보유 도메인을 Vercel에 연결 (DNS만 변경) | 등록기관은 그대로 유지 |
| 페이지 구조 | 랜딩 1페이지, 앵커 스크롤 | 별도 상세 페이지 없음 |
| 디자인 | 확정 C안 (Airbnb DESIGN.md 참고 + 오버라이드) | `docs/design/DESIGN.md` 참고 |
| 폰트 | Pretendard | 한글·영문 통일 |
| 다크모드 | 1차 범위 제외 | |

## 3. 사이트 구성

1. **Nav**: 워드마크 + 서비스 / 보관함 / About 앵커
2. **Hero**: "3개 서비스 운영 중" 배지, 제목, 부제, 서비스 바로가기 바
3. **운영 중인 서비스** (메인): onspot, way, goodday 카드 3개
4. **지난 실험들**: soulscribe, bizeng. 가볍게, 위계를 낮춰서
5. **About**: 호스트 카드(통계) + 소개 + 연락처
6. **Footer**

상세 레이아웃과 수치는 `docs/design/DESIGN.md` 6장.

## 4. 콘텐츠 원문

### Hero
- 배지: 3개 서비스 운영 중
- 제목: 작지만, **실제로 쓰이는** 서비스를 만듭니다
- 부제: 기업 AI 에이전트를 설계하는 박준형이 교회와 가족, 일상의 작은 문제를 풀려고 퇴근 후 만들어 온 jobible_ 시리즈입니다.
- 바로가기: 교회 / 시설·차량 예약 · 제자훈련 / 참고 자료 · 시니어 / 매일 좋은 글귀

### 운영 중인 서비스
| 이름 | 스크린샷 배지 | 메타 | 설명 |
|---|---|---|---|
| jobible_onspot | 교회에서 실제 사용 중 | 낙원제일교회 · Next.js, Turso | 교회 시설과 차량 예약을 한곳에서 관리합니다. 승인 결과는 카카오 알림톡으로 받습니다. |
| jobible_way | 제자훈련반 참고 | 제자훈련 · [기술 스택] | 제자훈련 과정에서 필요한 참고 자료를 한곳에 정리한 페이지입니다. |
| jobible_goodday | 시니어를 위한 글귀 | 시니어 · [기술 스택] | 아버지 같은 시니어 세대를 위해 매일 좋은 글귀를 모아 전합니다. 큰 글씨, 단순한 화면. |

### 지난 실험들 (상태: 휴식 중)
- jobible_soulscribe: 매일 명언을 필사하며 영어를 익히는 학습 앱
- jobible_bizeng: 영어 면접 대비를 위한 비즈니스 영어 연습 앱

### About
- 이름: 박준형 / 직함: AX Team Lead
- 통계: 21년+ IT 경력 · 3 운영 중 서비스 · 5 jobible_ 시리즈
- 제목: 만든 사람을 소개합니다
- 소개: 에이다루트에서 대기업 AI 에이전트 프로젝트를 이끌고 있습니다. LangChain, LangGraph, RAG, Vector DB로 일하고, 회사에서 배운 것을 주말에 작게 만들어 봅니다. 그중 쓸모 있는 것은 계속 운영합니다.
- 연락처: 이메일, LinkedIn

### Footer
- © 2026 박준형 · jobible_

## 5. 오너가 채워야 할 항목 (구현 중 TODO 주석으로 표시)

- [ ] 서비스 3개의 공개 URL
- [ ] 서비스별 스크린샷 1장씩 → `public/screens/onspot.png` 등 (권장 1600×1200, onspot은 개인정보가 안 보이는 화면)
- [ ] jobible_way, jobible_goodday의 기술 스택
- [ ] 공개할 이메일 주소, LinkedIn URL
- [ ] 연결할 도메인 이름
- [ ] (선택) About 아바타 사진. 없으면 "준" 이니셜 원형 유지

스크린샷이 없어도 회색 자리표시로 먼저 구현한다. `projects.ts`에서 이미지 경로가 비어 있으면 자리표시를 보여준다.

## 6. 구현 단계

| 단계 | 내용 | 완료 기준 |
|---|---|---|
| 1 | 프로젝트 생성, 토큰·폰트 설정, `projects.ts`, 섹션 뼈대 | `npm run build` 통과, 빈 섹션 렌더링 |
| 2 | Nav + Hero (배지, 제목 플럼 강조, 바로가기 바) | 시안과 나란히 비교해 일치 |
| 3 | 운영 중인 서비스 카드 + 지난 실험들 | 데이터 파일만으로 카드가 그려짐 |
| 4 | About(호스트 카드, 이메일 복사) + Footer | 복사 동작, 실패 시 대체 동작 |
| 5 | 반응형 (DESIGN.md 7장) | 390px / 768px / 1280px에서 가로 스크롤 없음 |
| 6 | 메타데이터(title, description, OG 이미지), favicon, `next/image` 최적화 | Lighthouse 성능·접근성 90+ |
| 7 | Vercel 배포 + 도메인 연결 | 도메인으로 접속, HTTPS |

각 단계가 끝나면 멈추고 변경 파일과 확인 방법을 보고한다.

### 참고 스니펫 (개념 확인용)

```ts
// src/data/projects.ts
export type ProjectStatus = 'live' | 'paused';

export interface Project {
  slug: string;           // 'onspot'
  name: string;           // 'jobible_onspot'
  status: ProjectStatus;
  badge?: string;         // 스크린샷 위 흰 배지 문구
  meta: string;           // '낙원제일교회 · Next.js, Turso'
  description: string;
  url?: string;           // TODO: 공개 URL
  image?: string;         // '/screens/onspot.png', 없으면 자리표시
}
```

Pretendard는 `pretendard` npm 패키지의 dynamic subset CSS를 쓰는 것을 권장한다(한글 글리프를 필요한 만큼만 받아 초기 로딩이 가볍다). `next/font/local`로 variable woff2를 직접 쓰는 방법도 가능하지만 파일이 약 2MB라 권장하지 않는다.

## 7. 배포·도메인 연결 시 주의

- Vercel 프로젝트에 도메인 추가 → Vercel이 알려주는 A/CNAME 레코드를 도메인 DNS에 등록.
- 기존 호스팅에서 **도메인 이메일**을 쓰고 있다면 MX 레코드는 건드리지 않는다. 네임서버 전체를 Vercel로 옮기면 MX를 다시 등록해야 한다. 레코드만 바꾸는 방식을 권장.
- 기존 PHP 호스팅을 바로 해지하지 않으려면 `legacy.` 같은 서브도메인으로 남겨둘 수 있다.

## 8. 리뷰 단계 (Codex) 점검 포인트

- 접근성: 대비(흰 글씨 버튼 `#E00B41`), 포커스 표시, 실제 `button`/`a` 사용, 이미지 alt
- 외부 링크 `rel="noopener noreferrer"`
- 클립보드 API 실패 처리
- 이미지 최적화(`next/image`, 크기 지정으로 CLS 방지)
- 불필요한 의존성이 없는지 (외부 UI 라이브러리 추가 금지)

## 9. 파일 안내

| 파일 | 내용 |
|---|---|
| `HANDOFF.md` | 이 문서. 결정사항, 콘텐츠, 단계 |
| `CLAUDE.md` | Claude Code가 매 세션 읽는 프로젝트 규칙 |
| `docs/design/DESIGN.md` | 디자인 기준 (토큰, 섹션 명세, 반응형) |
| `docs/design/mockup-desktop.html` | 확정 시안 정적 HTML. 브라우저로 열어 비교 |
| `docs/design/airbnb-reference.DESIGN.md` | getdesign.md 원본 참고 자료. DESIGN.md와 충돌하면 DESIGN.md가 우선 |

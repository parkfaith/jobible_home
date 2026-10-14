# 서비스 상세 페이지 — 2단계 구현 지시서

> 데스크톱 앱 세션(기획·설계)에서 작성한 문서를 Claude Code CLI(구현)로 넘긴다.
> 1단계(데이터 구조·초안)는 커밋 `f5bb254`, `ae804bd`로 끝났다. 이 문서는 **2단계만** 다룬다.
> 규칙: 이 단계가 끝나면 멈추고, 변경 파일 목록과 확인 방법을 보고한다. 카드 링크 변경(3단계)은 하지 않는다.

## 1. 목표

운영 중 서비스마다 설명 페이지 `/services/[slug]`를 만들고, 거기서 실제 운영 화면으로 넘어가는 버튼을 둔다.
메인 카드가 상세 페이지로 연결되는 것은 **3단계**이므로, 이 단계에서는 주소를 직접 입력해서 확인한다.

## 2. 먼저 읽을 것

1. `AGENTS.md`의 지시대로 아래 Next.js 16 문서를 읽고 시작한다. (학습 데이터와 다를 수 있다)
   - `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md`
   - `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-static-params.md`
   - `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`
   - `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-segment-config/dynamicParams.md`
2. `docs/design/DESIGN.md` 전체 (특히 3장 색 규칙, 5장 모양, 7장 반응형, 8장 접근성)
3. 재사용할 코드: `src/data/projects.ts`, `src/components/Container.tsx`, `Nav.tsx`, `Footer.tsx`, `Logo.tsx`, `CardLink.tsx`, `ServiceCard.tsx`, `Hero.tsx`(h1 크기 규칙), `Archive.tsx`/`ArchiveCard.tsx`(옅은 카드 스타일), `src/app/page.tsx`, `src/app/layout.tsx`

핵심 사실:
- `params`는 **Promise**다. `await props.params`로 읽는다. 타입은 전역 헬퍼 `PageProps<"/services/[slug]">`를 쓴다 (`layout.tsx`가 `LayoutProps<"/">`를 쓰는 것과 같은 방식. 타입은 `next dev`/`next build`가 생성한다).
- 사이트는 정적이다. `generateStaticParams`로 3개 경로를 빌드 때 만들고, `export const dynamicParams = false`로 그 밖의 slug는 404 처리한다.

## 3. 만들 것

### 3-1. 라우트 `src/app/services/[slug]/page.tsx` (서버 컴포넌트)

- `generateStaticParams()`: `liveProjects` 중 `detail`이 있는 서비스의 slug 목록을 반환한다.
- `dynamicParams = false`. 방어적으로 slug를 못 찾거나 `detail`이 없으면 `notFound()`.
- 구성은 `src/app/page.tsx`와 같다: `<Nav />` + `<main className="flex-1">` + `<Footer />`.
- `generateMetadata()`:
  - `title`: `${project.name} · 박준형`, `description`: `project.description`
  - **`alternates.canonical`을 `/services/${slug}`로 반드시 덮어쓴다.** `layout.tsx`가 `canonical: "/"`를 지정해서, 안 덮으면 상세 페이지가 메인의 중복으로 취급된다.
  - `openGraph`는 얕게 병합되므로 `type`, `siteName`, `locale`, `url`, `title`, `description`을 모두 다시 적는다. (`site`, `brand`는 `projects.ts`에서 가져온다)
  - OG 이미지는 루트의 `opengraph-image.tsx`가 그대로 적용된다. 서비스별 OG 이미지는 이번 범위가 아니다.

### 3-2. 컴포넌트

| 파일 | 역할 |
|---|---|
| `src/components/ServiceDetail.tsx` | 상세 본문 전체 (서버 컴포넌트, props: `project: Project`) |
| `src/components/OtherServices.tsx` | 하단 "다른 서비스" 목록 (props: `currentSlug: string`) |

### 3-3. 데이터 `src/data/projects.ts` (고정 UI 문구)

`servicesSection`처럼 고정 UI 문구를 한 객체로 둔다. 컴포넌트에 문구를 직접 쓰지 않는다.

```ts
export const serviceDetailPage = {
  back: "전체 서비스",
  openLive: "운영 화면 열기",
  audienceTitle: "이런 분들이 씁니다",
  problemTitle: "만든 이유",
  featuresTitle: "주요 기능",
  stackTitle: "기술 스택",
  othersTitle: "다른 서비스",
};
```

상태 표시는 기존 `servicesSection.liveLabel`("운영 중")을 재사용한다.

## 4. 화면 명세

### 4-1. 공통 원칙
- 색은 DESIGN.md 토큰만 쓴다. **코랄·플럼을 새 위치에 쓰지 않는다.** 코랄은 상태 점(● 운영 중)에만 쓴다.
- 그라데이션, 그림자, 스크롤 애니메이션 없음. 외부 UI 라이브러리 추가 없음. `any` 금지.
- 모든 문구는 `projects.ts`에서 읽는다. 브랜드 표기는 `joBiBle_` 대소문자 유지.
- `Container` 사용. 위 여백 `pt-10 md:pt-14`, 아래 여백 `pb-[72px] md:pb-[104px]`.

### 4-2. 상단 (전체폭)
1. 뒤로가기 링크: "← 전체 서비스" → `/#services`. 높이 44px 이상, 15px/600, hover 밑줄.
2. h1: `project.name`. 크기는 `Hero.tsx`의 h1 규칙(모바일 34px, 데스크톱 52px)을 따른다.
3. 메타 줄: `● 운영 중`(코랄 점) + `project.badge`(`surface-soft` 배경 원형 알약, 글씨 `ink`, 배지 타이포) + `project.meta`(`muted`).
4. 설명: `project.description`을 `text-lead`, `muted`, 최대폭 620px로 보여준다.
5. **운영 화면 열기 버튼**:
   - 먹색(`ink`) 배경 + 흰 글씨 채움 버튼, 모서리 8px, 높이 48px 이상, 문구 "운영 화면 열기" 뒤에 외부 링크 화살표 ↗.
   - 모바일은 전체폭, 데스크톱은 내용 너비.
   - `<a href={project.url} target="_blank" rel="noopener noreferrer">` + `sr-only` "(새 탭에서 열림)" (`CardLink.tsx` 방식 참고).
   - `project.url`이 없으면 버튼을 렌더링하지 않는다. (TODO 상태 대응)
   - 코랄 채움 버튼은 쓰지 않는다. DESIGN.md가 버튼 강조 위치를 이메일 복사 버튼으로 한정하고 있다.

### 4-3. 본문
- `lg(≥1024px)`: 2열 그리드, 열 사이 56px. **왼쪽 스크린샷, 오른쪽 정보 블록**.
- `lg 미만`: 1열, 스크린샷이 먼저 나오고 정보 블록이 이어진다.
- 스크린샷: `next/image`(`fill`, `object-cover object-top`), 모서리 20px(`rounded-card`), `bg-surface-strong`, 높이 모바일 260px / 데스크톱 420px. `priority`를 준다. `alt`는 `project.imageAlt`.
- 정보 블록(오른쪽), 위에서 아래로 간격 32px:
  1. **이런 분들이 씁니다** — `detail.audience` 한 문단
  2. **만든 이유** — `detail.problem` 한 문단
  3. **주요 기능** — `detail.features`를 `<ul>`로, 항목 사이 8px, 불릿 마커색 `muted-soft`
  4. **기술 스택** — `detail.stack`을 알약 칩으로 (`surface-soft` 배경, 글씨 `ink`, 배지 타이포, 가로 8px·세로 8px 간격, 줄바꿈 허용)
- 각 블록 제목은 h2, 17px/700(`text-card-title`). 본문은 16px, 행간 1.65, `body`.

### 4-4. 하단 "다른 서비스"
- 본문 아래 `border-t border-hairline-soft`, 위 여백 56px.
- h2 "다른 서비스"(`text-subsection`).
- 현재 서비스를 제외한 `detail`이 있는 운영 중 서비스를 보여준다. 모바일 1열, `md` 이상 2열.
- 각 항목은 `next/link`로 `/services/[slug]`에 연결하는 `surface-soft` 카드(모서리 14px, 패딩 20px). 이름(17px/700) + 설명(15px, `muted`) + 오른쪽 화살표. 테두리·그림자 없음. hover는 밑줄 정도로 절제한다.

### 4-5. 하단 버튼 중복
긴 모바일 화면에서 상단 버튼이 스크롤로 사라지므로, 정보 블록 끝에 같은 "운영 화면 열기" 버튼을 한 번 더 둔다. 공통 컴포넌트로 빼서 중복 코드를 만들지 않는다. (과해 보이면 오너에게 보고하고 제거 여부를 묻는다.)

## 5. 기존 코드 수정 (상세 페이지에서 메인으로 돌아가기 위해 필요)

`Nav`·`Logo`·`Footer`의 링크가 `#services`, `#top` 같은 **같은 페이지 앵커**라서, 상세 페이지에서는 동작하지 않는다.

- `navLinks`의 `href`를 `/#services`, `/#archive`, `/#about`, `/#contact`로 바꾼다. 메인에서는 같은 페이지 내 이동(새로고침 없음), 상세 페이지에서는 메인의 해당 위치로 이동한다.
- `Logo.tsx`의 `#top`을 `/#top`으로 바꾼다. (`layout.tsx`의 `<body id="top">` 유지)
- `footer.links`가 `link.href !== "#archive"` 식으로 필터링하고 있으니 새 href 값에 맞게 함께 고친다.
- 코드 전체에서 `href="#`, `"#` 패턴을 검색해 영향받는 곳이 더 없는지 확인한다. (`ShortcutBar`의 `#slug` 앵커는 메인 전용이므로 그대로 둔다.)
- 메인 페이지의 스크롤 이동과 모바일 메뉴가 이전과 똑같이 동작해야 한다.

## 6. DESIGN.md 갱신

`docs/design/DESIGN.md` 6장에 "서비스 상세 (`/services/[slug]`)" 항목을 추가해 4장의 명세를 요약해 둔다. 특히 "운영 화면 열기 버튼은 먹색 채움, 코랄 아님"이라는 결정을 적는다.

## 7. 완료 기준

1. `npm run build` 통과, 타입 오류 없음. 빌드 결과 라우트 목록에 `/services/[slug]`가 SSG(●)로 나오고 경로 `/services/onspot`, `/services/way`, `/services/goldendays`가 보인다.
2. `/services/없는주소`는 404.
3. 개발 서버에서 브라우저로 확인한다. 데스크톱(1280px), 태블릿(768px), 모바일(375px)에서 다음을 본다.
   - 가로 스크롤이 생기지 않는다.
   - 스크린샷이 3개 서비스 모두 잘리거나 늘어나지 않는다. (비율이 서로 다르다)
   - 운영 화면 열기 링크가 새 탭에서 열리고 `rel="noopener noreferrer"`가 있다.
   - "← 전체 서비스", 로고, Nav·Footer 링크가 상세 페이지에서 메인의 올바른 위치로 간다.
   - 메인 페이지의 Nav·Footer·로고 앵커 이동과 모바일 메뉴가 그대로 동작한다.
   - 키보드 Tab 이동 시 포커스 표시가 보인다.
4. 페이지 소스에 서비스별 `<title>`, `canonical`(`/services/slug`), `og:title`이 들어 있다.
5. `npm run build` 중 폰트 서브셋 스크립트가 갱신한 `src/fonts/pretendard-subset.woff2`를 함께 커밋한다.
6. 한국어 커밋 메시지로 커밋한다. **push는 오너 확인 후.**

## 8. 하지 않을 것 (범위 밖)
- 메인 카드의 링크를 상세 페이지로 바꾸기, 카드의 "바로 열기 ↗" 추가 → 3단계
- 서비스별 OG 이미지, sitemap, 추가 스크린샷 → 이후 논의
- 지난 실험들(soulscribe, bizeng)의 상세 페이지 (`detail`이 없으므로 만들지 않음)

## 9. 오너 확인이 필요한 항목 (CLI가 구현 후 보고에 포함)
- 운영 화면 열기 버튼을 먹색 채움으로 한 결정 (대안: 코랄 채움, 단 DESIGN.md 색 규칙 개정 필요)
- 하단에 버튼을 한 번 더 두는 것이 과한지
- `projects.ts`의 `// TODO(owner)` 항목: onspot 차량 예약 설명 보강, goldendays 업데이트 주기, way의 성격 확인

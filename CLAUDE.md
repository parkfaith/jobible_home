# CLAUDE.md — jobible_ 개인 홈페이지

## 프로젝트
jobible_ 시리즈를 소개하는 한 페이지짜리 개인 홈페이지. Next.js(App Router, TypeScript) + Tailwind CSS, Vercel 배포. 백엔드·DB 없음.

## 먼저 읽을 문서
- `HANDOFF.md`: 결정사항, 콘텐츠 원문, 구현 단계
- `docs/design/DESIGN.md`: 디자인 기준. UI 작업 전 반드시 확인
- `docs/design/mockup-desktop.html`: 확정 시안 (시각 비교용)

## 작업 방식
- 한 번에 한 단계만 진행하고, 끝나면 멈춰서 변경 파일 목록과 확인 방법을 보고한다.
- 응답과 주석은 한국어. 기술 용어는 원어 병기.
- 코드 리뷰·보안 점검·정적 분석은 별도로 Codex에서 진행한다.

## 규칙
- 콘텐츠는 `src/data/projects.ts`에만 둔다. 컴포넌트에 문구를 하드코딩하지 않는다 (섹션 제목 같은 고정 UI 문구는 예외).
- 화면에 보이는 브랜드 표기는 대소문자를 지켜 `joBiBle_`로 쓴다 (예: joBiBle_onspot). URL·코드 식별자·폴더명은 예외.
- 확인되지 않은 정보(URL, 기술 스택, 연락처)는 지어내지 않는다. `// TODO(owner):` 주석과 자리표시로 남긴다.
- 색은 DESIGN.md의 토큰만 쓴다. 코랄·플럼 강조는 DESIGN.md 3장에 지정된 위치에만 쓴다.
- 외부 UI 라이브러리를 추가하지 않는다. 필요하면 먼저 이유를 설명하고 승인을 받는다.
- 그라데이션, 과한 그림자, 스크롤 애니메이션을 쓰지 않는다.
- 이미지는 `next/image`, 외부 링크는 `target="_blank" rel="noopener noreferrer"`.
- 각 단계 완료 기준: `npm run build` 통과, 타입 오류 없음.

## 저장소
- GitHub: https://github.com/parkfaith/jobible_home.git (`origin`, 기본 브랜치 `main`)
- 단계가 끝날 때마다 한국어 커밋 메시지로 커밋한다. push는 오너 확인 후 진행한다.

## Next.js 16 주의
@AGENTS.md

## 명령
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
- 린트: `npm run lint`

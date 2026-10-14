import { serviceDetailPage } from "@/data/projects";

// 먹색 채움 "운영 화면 열기" 버튼 (DESIGN.md 6장 서비스 상세). URL이 없으면 렌더링하지 않는다.
export default function OpenLiveButton({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-12 w-full items-center justify-center gap-1.5 rounded-button bg-ink px-6 text-base font-semibold text-white hover:underline md:inline-flex md:w-auto"
    >
      {serviceDetailPage.openLive}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}

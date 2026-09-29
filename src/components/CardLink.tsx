import type { ReactNode } from "react";

interface CardLinkProps {
  href?: string;
  className?: string;
  children: ReactNode;
}

// URL이 있으면 새 탭 외부 링크, 없으면(TODO 상태) 링크 없는 블록으로 렌더링
export default function CardLink({ href, className = "", children }: CardLinkProps) {
  if (!href) return <div className={className}>{children}</div>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
      {children}
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}

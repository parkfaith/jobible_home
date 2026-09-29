import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// 콘텐츠 최대 1120px, 좌우 여백 80/40/20px (DESIGN.md 5·7장)
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[calc(var(--container-page)+160px)] px-5 md:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}

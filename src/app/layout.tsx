import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import { brand, hero } from "@/data/projects";

export const metadata: Metadata = {
  title: `${brand} · 박준형`,
  description: hero.subtitle,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body id="top" className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

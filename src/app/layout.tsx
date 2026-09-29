import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "jobible_ · 박준형",
  description:
    "기업 AI 에이전트를 설계하는 박준형이 교회와 가족, 일상의 작은 문제를 풀려고 만들어 온 jobible_ 시리즈입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

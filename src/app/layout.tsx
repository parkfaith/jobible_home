import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import { brand, hero, site } from "@/data/projects";

// 지정 도메인 → Vercel 운영 주소 → 로컬 순으로 절대 URL 기준을 정한다
function resolveSiteUrl() {
  if (site.url) return new URL(site.url);
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) return new URL(`https://${vercelUrl}`);
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  title: site.title,
  description: hero.subtitle,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: brand,
    title: site.title,
    description: hero.subtitle,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: hero.subtitle,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body id="top" className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

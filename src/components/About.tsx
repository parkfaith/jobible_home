import { about } from "@/data/projects";
import Container from "./Container";
import CopyEmailButton from "./CopyEmailButton";
import HostCard from "./HostCard";

const EMAIL_TEXT_ID = "about-email";

export default function About() {
  return (
    <section id="about" className="scroll-mt-6 py-[72px] md:py-[104px]">
      {/* 1024~1279px에서는 소개 글 폭 확보를 위해 카드·간격을 줄인다 */}
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-[72px]">
        <HostCard />

        <div className="flex flex-col gap-5">
          <h2 className="text-section">{about.title}</h2>
          <p className="text-[17px] leading-[1.7] text-body">{about.intro}</p>

          {/* 모바일은 링크 터치 영역 44px 확보 (DESIGN.md 7장) */}
          <ul className="flex flex-col text-[15px] text-body md:gap-1.5">
            <li>
              이메일 ·{" "}
              <a
                id={EMAIL_TEXT_ID}
                href={`mailto:${about.email}`}
                className="inline-flex min-h-11 items-center hover:underline md:min-h-0"
              >
                {about.email}
              </a>
            </li>
            <li>
              LinkedIn ·{" "}
              <a
                href={about.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:underline md:min-h-0"
              >
                {about.linkedin.label}
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-2.5 pt-1 md:flex-row">
            <CopyEmailButton email={about.email} fallbackTargetId={EMAIL_TEXT_ID} className="w-full md:w-auto" />
            <a
              href={about.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-button border border-ink px-6 text-base font-semibold md:w-auto"
            >
              LinkedIn 열기
              <span className="sr-only">(새 탭에서 열림)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

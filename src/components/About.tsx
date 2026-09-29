import { about } from "@/data/projects";
import Container from "./Container";
import CopyEmailButton from "./CopyEmailButton";
import HostCard from "./HostCard";

const EMAIL_TEXT_ID = "about-email";

export default function About() {
  return (
    <section id="about" className="scroll-mt-6 py-[72px] md:py-[104px]">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-[72px]">
        <HostCard />

        <div className="flex flex-col gap-5">
          <h2 className="text-section">{about.title}</h2>
          <p className="text-[17px] leading-[1.7] text-body">{about.intro}</p>

          <ul className="flex flex-col gap-1.5 text-[15px] text-body">
            <li>
              이메일 ·{" "}
              <a id={EMAIL_TEXT_ID} href={`mailto:${about.email}`} className="hover:underline">
                {about.email}
              </a>
            </li>
            <li>
              LinkedIn ·{" "}
              <a
                href={about.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
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

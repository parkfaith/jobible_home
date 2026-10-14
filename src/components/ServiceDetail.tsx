import Image from "next/image";
import Link from "next/link";
import { serviceDetailPage, servicesSection, type Project } from "@/data/projects";
import Container from "./Container";
import OpenLiveButton from "./OpenLiveButton";
import OtherServices from "./OtherServices";

const blockTitleClass = "text-card-title";
const blockBodyClass = "text-base leading-[1.65] text-body";

export default function ServiceDetail({ project }: { project: Project }) {
  const { detail } = project;
  if (!detail) return null;

  return (
    <Container className="pt-10 pb-[72px] md:pt-14 md:pb-[104px]">
      <Link
        href="/#services"
        className="inline-flex min-h-11 items-center text-[15px] font-semibold hover:underline"
      >
        <span aria-hidden="true">←&nbsp;</span>
        {serviceDetailPage.back}
      </Link>

      <header className="mt-2 flex flex-col items-start gap-4">
        <h1 className="text-display-sm md:text-display">{project.name}</h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex items-center gap-[5px] text-sm">
            <span aria-hidden="true" className="size-[7px] rounded-full bg-coral" />
            {servicesSection.liveLabel}
          </span>
          {project.badge && (
            <span className="rounded-full bg-surface-soft px-3 py-[7px] text-badge text-ink">
              {project.badge}
            </span>
          )}
          {project.meta && <span className="text-[15px] text-muted">{project.meta}</span>}
        </div>
        <p className="max-w-[620px] text-base leading-[1.6] text-muted md:text-lead">
          {project.description}
        </p>
        <div className="w-full md:w-auto">
          <OpenLiveButton href={project.url} />
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative h-[260px] overflow-hidden rounded-card bg-surface-strong md:h-[420px]">
          {project.image && (
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.name} 화면`}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top"
            />
          )}
        </div>

        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-2">
            <h2 className={blockTitleClass}>{serviceDetailPage.audienceTitle}</h2>
            <p className={blockBodyClass}>{detail.audience}</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className={blockTitleClass}>{serviceDetailPage.problemTitle}</h2>
            <p className={blockBodyClass}>{detail.problem}</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className={blockTitleClass}>{serviceDetailPage.featuresTitle}</h2>
            <ul className={`${blockBodyClass} flex list-disc flex-col gap-2 pl-5 marker:text-muted-soft`}>
              {detail.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className={blockTitleClass}>{serviceDetailPage.stackTitle}</h2>
            <ul className="flex flex-wrap gap-2">
              {detail.stack.map((item) => (
                <li key={item} className="rounded-full bg-surface-soft px-3 py-2 text-badge text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 긴 모바일 화면에서 상단 버튼이 사라지므로 한 번 더 둔다 */}
          <OpenLiveButton href={project.url} />
        </div>
      </div>

      <OtherServices currentSlug={project.slug} />
    </Container>
  );
}

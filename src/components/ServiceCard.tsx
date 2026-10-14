import Image from "next/image";
import Link from "next/link";
import { servicesSection, type Project } from "@/data/projects";
import CardLink from "./CardLink";

// 스크린샷 + 배지. 링크는 감싸지 않고 모양만 담당한다
function CardImage({ project }: { project: Project }) {
  return (
    <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-card bg-surface-strong text-sm text-muted-soft md:h-[300px]">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} 화면`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <span aria-hidden="true">
          {servicesSection.placeholderLabel} · {project.slug}
        </span>
      )}
      {project.badge && (
        <span className="absolute top-3.5 left-3.5 rounded-full bg-canvas px-3 py-[7px] text-badge text-ink shadow-badge">
          {project.badge}
        </span>
      )}
    </div>
  );
}

function StatusDot() {
  return (
    <span className="flex shrink-0 items-center gap-[5px] text-sm">
      <span aria-hidden="true" className="size-[7px] rounded-full bg-coral" />
      {servicesSection.liveLabel}
    </span>
  );
}

export default function ServiceCard({ project }: { project: Project }) {
  // 상세 페이지가 없으면 카드 전체가 운영 URL 링크 (예전 동작)
  if (!project.detail) {
    return (
      <article id={project.slug} className="scroll-mt-6">
        <CardLink href={project.url} className="flex flex-col gap-3.5 rounded-card">
          <CardImage project={project} />
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-card-title group-hover:underline">{project.name}</h3>
              <StatusDot />
            </div>
            {project.meta && <p className="text-[15px] text-muted">{project.meta}</p>}
            <p className="mt-1 text-[15px] leading-[1.55] text-body">{project.description}</p>
          </div>
        </CardLink>
      </article>
    );
  }

  // 상세 페이지가 있으면 늘린 링크(stretched link)로 카드 전체를 상세 링크로 만들고,
  // "바로 열기" 외부 링크는 그 위(z-10)에 올려 <a> 중첩을 피한다
  return (
    <article id={project.slug} className="group relative flex scroll-mt-6 flex-col gap-3.5 rounded-card">
      <CardImage project={project} />

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-card-title group-hover:underline">
            <Link
              href={`/services/${project.slug}`}
              className="rounded-card after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </Link>
          </h3>
          <StatusDot />
        </div>
        {project.meta && <p className="text-[15px] text-muted">{project.meta}</p>}
        <p className="mt-1 text-[15px] leading-[1.55] text-body">{project.description}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-1 inline-flex min-h-11 w-fit items-center text-[15px] font-semibold text-ink hover:underline"
          >
            {servicesSection.directLink}
            <span aria-hidden="true">&nbsp;↗</span>
            <span className="sr-only"> — {project.name}, 새 탭에서 열림</span>
          </a>
        )}
      </div>
    </article>
  );
}

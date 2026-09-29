import Image from "next/image";
import { servicesSection, type Project } from "@/data/projects";
import CardLink from "./CardLink";

export default function ServiceCard({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="scroll-mt-6">
      <CardLink href={project.url} className="flex flex-col gap-3.5 rounded-card">
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

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-card-title group-hover:underline">{project.name}</h3>
            <span className="flex shrink-0 items-center gap-[5px] text-sm">
              <span aria-hidden="true" className="size-[7px] rounded-full bg-coral" />
              {servicesSection.liveLabel}
            </span>
          </div>
          {project.meta && <p className="text-[15px] text-muted">{project.meta}</p>}
          <p className="mt-1 text-[15px] leading-[1.55] text-body">{project.description}</p>
        </div>
      </CardLink>
    </article>
  );
}

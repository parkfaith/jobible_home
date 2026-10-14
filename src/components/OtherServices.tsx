import Link from "next/link";
import { liveProjects, serviceDetailPage } from "@/data/projects";

// 현재 서비스를 뺀, 상세가 있는 운영 중 서비스 목록
export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = liveProjects.filter((project) => project.detail && project.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="mt-14 flex flex-col gap-5 border-t border-hairline-soft pt-14">
      <h2 className="text-subsection">{serviceDetailPage.othersTitle}</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/services/${project.slug}`}
              className="group flex h-full items-center justify-between gap-4 rounded-panel bg-surface-soft p-5"
            >
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-card-title group-hover:underline">{project.name}</span>
                <span className="text-[15px] leading-[1.55] text-muted">{project.description}</span>
              </div>
              <span aria-hidden="true" className="shrink-0 text-lg">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

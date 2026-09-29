import Image from "next/image";
import { archiveSection, type Project } from "@/data/projects";
import CardLink from "./CardLink";

// 운영 중 카드보다 위계를 낮춘 가로형 카드 (DESIGN.md 6장 지난 실험들)
export default function ArchiveCard({ project }: { project: Project }) {
  return (
    <CardLink
      href={project.url}
      className="flex items-center gap-4 rounded-panel bg-surface-soft p-4"
    >
      <div className="relative size-14 shrink-0 overflow-hidden rounded-[10px] bg-hairline-soft">
        {project.image && (
          <Image
            src={project.image}
            // 이름이 바로 옆에 있으므로 장식 이미지로 처리
            alt=""
            fill
            sizes="56px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex min-w-0 grow flex-col gap-0.5">
        <h3 className="text-base font-semibold group-hover:underline">{project.name}</h3>
        <p className="text-sm text-muted">{project.description}</p>
      </div>
      <span className="shrink-0 text-[13px] text-muted">{archiveSection.pausedLabel}</span>
    </CardLink>
  );
}

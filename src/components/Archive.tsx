import { archiveSection, pastProjects } from "@/data/projects";
import ArchiveCard from "./ArchiveCard";
import Container from "./Container";

export default function Archive() {
  return (
    <section id="archive" className="scroll-mt-6 pt-[72px] md:pt-24">
      <Container className="flex flex-col gap-5">
        <h2 className="text-subsection">{archiveSection.title}</h2>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pastProjects.map((project) => (
            <li key={project.slug}>
              <ArchiveCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

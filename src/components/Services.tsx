import { liveProjects, servicesSection } from "@/data/projects";
import Container from "./Container";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-6 pt-[72px] md:pt-[104px]">
      <Container className="flex flex-col gap-7">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-section">{servicesSection.title}</h2>
          <p className="text-[15px] text-muted">{servicesSection.tagline}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-7">
          {liveProjects.map((project) => (
            <ServiceCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

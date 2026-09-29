import { servicesSection } from "@/data/projects";
import Container from "./Container";

// TODO(3단계): 서비스 카드 그리드
export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 pt-[72px] md:pt-[104px]">
      <Container>
        <h2 className="text-section">{servicesSection.title}</h2>
      </Container>
    </section>
  );
}

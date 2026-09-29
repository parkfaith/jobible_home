import { archiveSection } from "@/data/projects";
import Container from "./Container";

// TODO(3단계): 지난 실험 카드
export default function Archive() {
  return (
    <section id="archive" className="scroll-mt-20 pt-[72px] md:pt-24">
      <Container>
        <h2 className="text-subsection">{archiveSection.title}</h2>
      </Container>
    </section>
  );
}

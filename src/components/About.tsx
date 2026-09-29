import { about } from "@/data/projects";
import Container from "./Container";

// TODO(4단계): 호스트 카드, 소개, 이메일 복사
export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-[72px] md:py-[104px]">
      <Container>
        <h2 className="text-section">{about.title}</h2>
      </Container>
    </section>
  );
}

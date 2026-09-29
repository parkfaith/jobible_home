import { hero } from "@/data/projects";
import Container from "./Container";

// TODO(2단계): 배지, 플럼 강조 제목, 바로가기 바
export default function Hero() {
  return (
    <header className="pt-[88px]">
      <Container className="text-center">
        <h1 className="text-display-sm lg:text-display">
          {hero.titleLead}
          {hero.titleEmphasis} {hero.titleTail}
        </h1>
      </Container>
    </header>
  );
}

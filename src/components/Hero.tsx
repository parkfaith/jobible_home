import { hero } from "@/data/projects";
import Container from "./Container";
import ShortcutBar from "./ShortcutBar";

export default function Hero() {
  return (
    <header className="pt-14 md:pt-[88px]">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-coral-tint px-3.5 py-[7px] text-badge text-coral-ink">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
          {hero.badge}
        </p>

        <h1 className="text-display-sm md:text-display">
          {hero.titleLead}
          <span className="text-plum">{hero.titleEmphasis}</span>
          <br />
          {hero.titleTail}
        </h1>

        <p className="max-w-[620px] text-base leading-[1.6] text-muted md:text-lead">
          {hero.subtitle}
        </p>

        <ShortcutBar />
      </Container>
    </header>
  );
}

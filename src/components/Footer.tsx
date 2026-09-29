import { footer } from "@/data/projects";
import Container from "./Container";

// TODO(4단계): 오른쪽 링크
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-soft pt-8 pb-10 text-sm text-muted">
      <Container>{footer.copyright}</Container>
    </footer>
  );
}

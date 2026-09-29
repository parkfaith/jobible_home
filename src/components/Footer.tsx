import { footer } from "@/data/projects";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-soft pt-8 pb-10 text-sm text-muted">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <ul className="-mx-2 flex">
          {footer.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="inline-flex min-h-11 items-center px-2.5 text-ink hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

import Container from "./Container";

// TODO(2단계): 로고, 앵커 링크, 모바일 햄버거
export default function Nav() {
  return (
    <nav aria-label="주요 메뉴" className="h-20 border-b border-hairline-soft">
      <Container className="flex h-full items-center">
        <span className="text-[21px] font-bold text-coral-strong">jobible_</span>
      </Container>
    </nav>
  );
}

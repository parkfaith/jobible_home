import { brand } from "@/data/projects";

// 코랄 원 + 워드마크 (DESIGN.md 6장 Nav)
export default function Logo() {
  return (
    <a href="#top" className="flex min-h-11 items-center gap-2 rounded-full">
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-full bg-coral text-[15px] font-extrabold text-white"
      >
        j
      </span>
      <span className="text-[21px] font-bold tracking-[-0.4px] text-coral-strong">{brand}</span>
    </a>
  );
}

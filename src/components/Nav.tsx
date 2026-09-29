"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/projects";
import Container from "./Container";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴가 열려 있을 때 Esc로 닫기
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav aria-label="주요 메뉴" className="relative h-20 border-b border-hairline-soft bg-canvas">
      <Container className="flex h-full items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-1 text-[15px] font-semibold md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block rounded-full px-4 py-3 hover:bg-surface-soft">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full hover:bg-surface-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      <ul
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-10 border-b border-hairline-soft bg-canvas px-5 py-2 text-base font-semibold md:hidden"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="flex min-h-11 items-center rounded-button px-3 hover:bg-surface-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface CopyEmailButtonProps {
  email: string;
  /** 복사 실패 시 선택해 줄 이메일 텍스트 요소의 id */
  fallbackTargetId: string;
  className?: string;
}

type CopyState = "idle" | "copied" | "selected";

const LABELS: Record<CopyState, string> = {
  idle: "이메일 주소 복사",
  copied: "복사됨",
  selected: "주소를 선택했어요",
};

// 클립보드 API가 막힌 환경(비보안 컨텍스트, 권한 거부)에서는 주소 텍스트를 선택해 직접 복사하도록 한다
function selectText(elementId: string) {
  const target = document.getElementById(elementId);
  const selection = window.getSelection();
  if (!target || !selection) return false;
  const range = document.createRange();
  range.selectNodeContents(target);
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

export default function CopyEmailButton({ email, fallbackTargetId, className = "" }: CopyEmailButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleClick = async () => {
    let next: CopyState;
    try {
      if (!navigator.clipboard) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(email);
      next = "copied";
    } catch {
      next = selectText(fallbackTargetId) ? "selected" : "idle";
    }
    setState(next);
    clearTimeout(timerRef.current);
    // 복사 성공 표시는 1.5초, 선택 안내는 읽을 시간을 조금 더 준다
    timerRef.current = setTimeout(() => setState("idle"), next === "copied" ? 1500 : 3000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex h-12 items-center justify-center rounded-button bg-coral-strong px-6 text-base font-semibold text-white ${className}`}
    >
      <span aria-live="polite">{LABELS[state]}</span>
    </button>
  );
}

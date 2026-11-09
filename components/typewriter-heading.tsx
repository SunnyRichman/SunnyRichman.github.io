"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "> Hello,", className: "text-[#006C6C]" },
  { text: "I'm", className: "text-[#006C6C]" },
  { text: "Raweerot", className: "text-[#0035AD]" },
];

const TYPE_SPEED_MS = 70;
const LINE_PAUSE_MS = 250;

export function TypewriterHeading() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const replayTimer = setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
      }, 10_000);

      return () => clearTimeout(replayTimer);
    }

    const currentLine = LINES[lineIndex].text;
    const isLineComplete = charCount >= currentLine.length;

    const timer = setTimeout(
      () => {
        if (!isLineComplete) {
          setCharCount((count) => count + 1);
        } else {
          setLineIndex((index) => index + 1);
          setCharCount(0);
        }
      },
      isLineComplete ? LINE_PAUSE_MS : TYPE_SPEED_MS,
    );

    return () => clearTimeout(timer);
  }, [lineIndex, charCount]);

  const isDone = lineIndex >= LINES.length;

  return (
    <h1
      aria-label="> Hello, I'm Raweerot"
      className="max-w-4xl font-mono text-3xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
      style={{ minHeight: "3.3em" }}
    >
      {LINES.map((line, index) => {
        const isActive = index === lineIndex;
        const isPending = index > lineIndex;
        const visibleText = isPending
          ? ""
          : isActive
            ? line.text.slice(0, charCount)
            : line.text;

        return (
          <span key={line.text} aria-hidden="true" className="block">
            <span className={line.className}>{visibleText}</span>
            {isActive && (
              <span className="text-[#AA800E] motion-safe:animate-pulse">_</span>
            )}
            {isDone && index === LINES.length - 1 && (
              <span className="text-[#AA800E] motion-safe:animate-pulse">_</span>
            )}
          </span>
        );
      })}
    </h1>
  );
}

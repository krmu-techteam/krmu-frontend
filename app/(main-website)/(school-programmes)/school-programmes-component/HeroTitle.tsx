"use client";

import { useLayoutEffect, useRef, useEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HeroTitle({ title, highlightitle }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isLong = (title?.length || 0) + (highlightitle?.length || 0) > 80;

  useIsomorphicLayoutEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const adjustFontSize = () => {
      el.classList.remove("xl:text-[36px]");
      el.classList.add("xl:text-[45px]");

      const styles = getComputedStyle(el);
      const lineHeight = parseFloat(styles.lineHeight);
      
      if (!isNaN(lineHeight) && el.scrollHeight > lineHeight * 3.1) {
        el.classList.add("xl:text-[36px]");
        el.classList.remove("xl:text-[45px]");
      }
    };

    adjustFontSize();
    
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [title, highlightitle]);

  return (
    <h1
      ref={titleRef}
      className={`text-[#0A41A1] font-bold leading-[1.1] mb-2 [text-wrap:balance] text-3xl sm:text-4xl transition-none ${
        isLong ? "xl:text-[36px]" : "xl:text-[45px]"
      }`}
    >
      {title} <span className="text-[#e61f21]">{highlightitle}</span>
    </h1>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

export default function HeroTitle({ title, highlightitle }: any) {
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const [small, setSmall] = useState(false);

  // useEffect(() => {
  //   const el = titleRef.current;
  //   if (!el) return;

  //   const lineHeight = parseFloat(getComputedStyle(el).lineHeight); 
  //   const maxHeight = lineHeight * 4;

  //   if (el.scrollHeight > maxHeight) {
  //     setSmall(true);
  //   }
  // }, [title]);

  return (
    <h1
      className={`text-[#0A41A1] font-bold leading-[1.1] mb-2 transition-all text-3xl sm:text-4xl xl:text-[58px]`}
    >
      {title} <span className="text-[#e61f21]">{highlightitle}</span>
    </h1>
  );
}
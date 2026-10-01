"use client";

import Link from "next/link";
import { HeroMarqueeSection } from "../law-2026/contentype";

type Props = {
  data: HeroMarqueeSection;
};

const HeroMarquee = ({ data }: Props) => {
  const repeatedMessages = [...data.messages, ...data.messages];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{ backgroundColor: data.bgColor ?? "#e31e24" }}
    >
      <div
        className={`flex w-max gap-10 text-white font-medium ${
          data.speedClass ?? "animate-marquee"
        }`}
      >
        {repeatedMessages.map((msg, index) => {
          const commonClassName = `
    whitespace-nowrap
    relative
    after:content-['']
    after:absolute
    after:w-2
    after:h-2
    after:bg-white
    after:top-1/2
    after:-translate-y-1/2
    after:right-[-22px]
    after:rounded-full
  `;

          if (data.url) {
            return (
              <Link
                key={index}
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClassName}
                dangerouslySetInnerHTML={{
                  __html: msg,
                }}
              />
            );
          }

          return (
            <p
              key={index}
              className={commonClassName}
              dangerouslySetInnerHTML={{
                __html: msg,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroMarquee;

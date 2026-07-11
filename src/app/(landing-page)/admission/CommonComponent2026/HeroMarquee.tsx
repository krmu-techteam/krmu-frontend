"use client";

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
        {repeatedMessages.map((msg, index) => (
          <p
            key={index}
            className="whitespace-nowrap relative after:content-[''] 
after:absolute 
after:w-2 
after:h-2 
after:bg-white 
after:top-1/2 
after:-translate-y-1/2 
after:right-[-22px] 
after:rounded-full
"
          >
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeroMarquee;

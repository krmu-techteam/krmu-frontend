"use client";

import { HeroCourseMarqueeSection } from "../btech-cse-course/contentType";

type Props = {
  data: HeroCourseMarqueeSection;
};

const HeroCourseMarquee = ({ data }: Props) => {
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
          <p key={index} className="whitespace-nowrap">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeroCourseMarquee;

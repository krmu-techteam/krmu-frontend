"use client";

import Link from "next/link";
import { HeroCourseMarqueeSection } from "../btech-cse-course/contentType";

type Props = {
  data: HeroCourseMarqueeSection;
};

const HeroCourseMarquee = ({ data }: Props) => {
  const repeatedMessages = [...data.messages, ...data.messages];

  return (
    <div
      className="relative overflow-hidden py-1.5"
      style={{ backgroundColor: data.bgColor ?? "#e31e24" }}
    >
      <div
        className={`flex w-max gap-10 text-white temp-class font-medium ${
          data.speedClass ?? "animate-marquee"
        }`}
      >
        {repeatedMessages.map((msg, index) => (
          <Link
            href={data.url || "#"}
            key={index}
            className="whitespace-nowrap"
            target="_blank"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: msg,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroCourseMarquee;

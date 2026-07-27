"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { programmeOverviewData } from "../programs/progdata/programmeOverviewData";

type Props = {
  slug: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const ProgrammeOverview = ({ slug }: Props) => {
  const data = programmeOverviewData[slug];
  // console.log("data", data);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      className={`${inter.className} w-full bg-white py-12 px-4 sm:px-6 md:px-8`}
    >
      <div className="max-w-[1500px] mx-auto px-2">
        <div
          className="relative overflow-hidden rounded-[20px] py-10 px-6 sm:px-10 z-10 flex flex-col justify-center text-left"
          style={{
            background: "linear-gradient(90deg, #0161B0 0%, #001228 100%)",
          }}
        >
          {/* Dashed Gradient Border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="16"
              ry="16"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#001732" />
                <stop offset="100%" stopColor="#004698" />
              </linearGradient>
            </defs>
          </svg>

          {/* Background Decoration */}
          <div className="absolute bottom-0 right-0 pointer-events-none w-[220px] h-[212px] z-0 overflow-hidden select-none">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_636_1_a5c11e2e58.png"
              alt="bg image"
              width={1024}
              height={1024}
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start w-full">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[30px] mb-4">
              {data?.title}
            </h2>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-[52px]"
              }`}
            >
              <div
                className={`text-white text-sm sm:text-base md:text-[18px] leading-[130%] font-light w-full transition-opacity duration-500 ${
                  isExpanded ? "opacity-100" : "opacity-95"
                }`}
              >
                {data?.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${
                      index !== data.paragraphs.length - 1 ? "mb-4" : ""
                    } ${
                      index === 0
                        ? ""
                        : `transition-all duration-500 ${
                            index === 2
                              ? "delay-75"
                              : index === 3
                                ? "delay-150"
                                : ""
                          } ${
                            isExpanded
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <a
              href="#"
              onClick={toggleExpand}
              className="inline-block font-semibold text-white text-sm sm:text-base underline underline-offset-4 decoration-1 hover:text-white/80 hover:decoration-2 transition-all duration-300 cursor-pointer mt-4"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { getLocationContent } from "../lib/getContent";
import { Fraunces, Poppins } from "next/font/google";
import { Phone, MapPin } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const Location = () => {
  const data = getLocationContent();
  const content = data.location;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return (
          <Phone
            strokeWidth={1.5}
            className="w-6 h-6 text-[#002C51] shrink-0"
          />
        );
      case "MapPin":
        return (
          <MapPin
            strokeWidth={1.5}
            className="w-6 h-6 text-[#002C51] shrink-0"
          />
        );
      default:
        return (
          <Phone
            strokeWidth={1.5}
            className="w-6 h-6 text-[#002C51] shrink-0"
          />
        );
    }
  };

  return (
    <section className="w-full bg-[#FDF7EB] text-[#012D52]">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          {/* Left Column: Heading, description & contact details */}
          <div className="w-full lg:max-w-[541px] flex flex-col">
            {/* Subheading / Badge */}
            <span
              className={`${poppins.className} text-[#7A5821] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
            >
              {content.badge}
            </span>

            {/* Title */}
            <h2
              className={`${fraunces.className} text-[#002C51] text-3xl sm:text-4xl md:text-[38px] font-semibold mb-2`}
            >
              {content.title}
            </h2>

            {/* Description */}
            <p
              className={`${poppins.className} text-[#002C51] text-sm sm:text-base md:text-[16px] leading-relaxed mb-10 `}
            >
              {content.description}
            </p>

            {/* Contact Info blocks */}
            <div className="flex flex-col gap-6">
              {content.contactInfo.map((info) => (
                <div key={info.id} className="flex items-center gap-5">
                  {/* Icon Container */}
                  <div className="w-[50px] h-[50px] bg-[#F7F0E0]  rounded-[5px] flex items-center justify-center shrink-0">
                    {renderIcon(info.icon)}
                  </div>

                  {/* Text details */}
                  <div
                    className={`${poppins.className} text-[#002C51] text-[16px] max-w-[340px] `}
                  >
                    <span className="font-bold">{info.label}</span> ·{" "}
                    {info.id === "call" ? (
                      <a
                        href={info.link}
                        className="hover:underline transition-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Campus dome building image */}
          <div className="w-full lg:w-[50%] lg:min-w-[420px] flex justify-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={content.image}
                alt="KRMU Campus dome building with students"
                width={1440}
                height={1440}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

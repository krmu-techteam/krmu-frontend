import React from "react";
import Image from "next/image";
import Link from "next/link";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { getContent } from "../lib/getContent";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

type Props = {
  formId?: string;
};

const NewHeroSection = ({ formId }: Props) => {
  const data = getContent();
  const hero = data.hero;

  // Find the primary button (Apply Now) to see if it should trigger NpfPopup
  const primaryButton =
    hero.button.find((btn) => btn.variant === "primary") || hero.button[0];
  const secondaryButton =
    hero.button.find((btn) => btn.variant === "secondary") || hero.button[1];

  // Fallback formId if not provided (e.g. standard KRMU formId or fallback)
  const finalFormId = formId || "2282";

  return (
    <section className="relative w-full bg-[radial-gradient(50%_50%_at_50%_50%,#024178_0%,#012D52_50%,#012D52_100%)] text-white pt-24 pb-0 md:pt-28 lg:pt-36 overflow-hidden flex flex-col justify-between min-h-[600px] lg:min-h-[700px]">
      <div className="max-w-[1530px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 py-12 lg:py-16 mb-6">
        {/* Left Content Column */}
        <div className="w-full lg:w-[50%] flex flex-col text-left">
          {/* Badge */}
          <span className="text-[#FFB700] text-xs sm:text-[11px] font-semibold tracking-[0.17em] uppercase mb-4">
            {hero.sub_heading}
          </span>

          {/* Heading */}
          <h1
            className={`${playfair.className} lg:w-[95%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl    text-white mb-6 tracking-normal `}
          >
            {hero.heading}
          </h1>

          {/* Description */}
          <p className="text-white lg:w-[85%] text-sm sm:text-base md:text-[17px] tracking-wide  mb-4 max-w-2xl ">
            {hero.content}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-6">
            {primaryButton &&
              (finalFormId ? (
                <NpfPopup
                  formId={finalFormId}
                  btnClass=" bg-[#DE0000] hover:bg-[#b30000] text-white font-semibold text-sm sm:text-[14px] px-8 py-3 rounded-[2px] transition-all duration-300 shadow-lg shadow-black/30 whitespace-nowrap"
                  btnText={primaryButton.title}
                  showIcon={false}
                />
              ) : (
                <Link
                  href={primaryButton.link}
                  className="bg-[#DE0000] hover:bg-[#b30000] text-white font-semibold text-sm sm:text-[14px] px-8 py-3 rounded-[2px] transition-all duration-300 shadow-lg shadow-black/30 text-center whitespace-nowrap"
                >
                  {primaryButton.title}
                </Link>
              ))}

            {secondaryButton && (
              <Link
                href={secondaryButton.link}
                className="border border-white hover:border-white hover:bg-white/10 text-white font-medium text-sm sm:text-[14px] px-8 py-3  rounded-[2px] transition-all duration-300 text-center whitespace-nowrap"
              >
                {secondaryButton.title}
              </Link>
            )}
          </div>

          {/* Divider */}
          <hr className="border-t border-[#024A4F] mb-6 w-[90%]" />

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-[90%]">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[#FFB700] text-[10px] 2xl:text-[12px] font-semibold tracking-[0.17em] 2xl:tracking-[0.10em]  uppercase">
                  {stat.label}
                </span>
                <span className=" text-white text-base sm:text-[15px] 2xl:text-[17px] font-semibold mt-1">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <div className="relative  rounded-[10px]   max-w-[492px] max-h-[440px]  w-full aspect-square overflow-hidden flex items-center justify-center ">
            {/* <div className="relative w-full h-full rounded-[10px] overflow-hidden"> */}
            <Image
              src={hero.image}
              alt="MBA Fintech Student"
              fill
              priority
              className="object-cover  "
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Announcement Banner */}
      <div className="w-full bg-[#B08233] py-3.5 text-center text-white text-xs sm:text-[17px] font-medium tracking-wide z-10">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap justify-center items-center gap-1">
          <span className="font-bold">{hero.banner.text}</span>
          <span>&nbsp;{hero.banner.text2}&nbsp;</span>
          {hero.banner.linkText && hero.banner.link && (
            <Link
              href={hero.banner.link}
              className="underline hover:text-slate-100 transition-colors inline-flex items-center gap-1 "
            >
              {hero.banner.linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;

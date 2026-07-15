import React from "react";
import Image from "next/image";
import Link from "next/link";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
// import { getContent } from "../lib/getContent";
import { Playfair_Display, Poppins } from "next/font/google";
import { HeroPageContentType } from "../types/contentHero";
import { HeroSection } from "@/lib/types/school-programme";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  style: ["italic", "normal"],
});

type Props = {
  formId?: string;
  dataContent?: HeroPageContentType | null;
  heroSection: HeroSection;
};

const NewHeroSection = ({ formId, dataContent, heroSection }: Props) => {
  const data = dataContent;
  if (!data || !data.hero) return null;
  const hero = data.hero;

  // Find the primary button (Apply Now) to see if it should trigger NpfPopup
  // const primaryButton =
  //   hero.button.find((btn) => btn.variant === "primary") || hero.button[0];
  const secondaryButton =
    hero.button.find((btn) => btn.variant === "secondary") || hero.button[1];

  return (
    <section
      id="hero-section"
      className="relative w-full bg-[radial-gradient(50%_50%_at_50%_50%,#024178_0%,#012D52_50%,#012D52_100%)] text-white pt-10 pb-0 sm:pt-24 md:pt-28 lg:pt-30 overflow-hidden flex flex-col justify-between min-h-[520px] sm:min-h-[600px] lg:min-h-[700px]"
    >
      <div className="absolute  lg:hidden top-0 h-[500px]   w-[200px] sm:w-[260px] md:w-[300px] lg:w-[329px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[11%] xl:right-[16.5%] 2xl:right-[24.5%] bottom-0 bg-[linear-gradient(0.98deg,#D9D9D900_1.07%,#DE000090_99.48%)]" />
      <div className=" max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col-reverse lg:flex-row items-start justify-between gap-8 lg:gap-8 py-8 sm:py-10 lg:py-20">
        {/* Left Content Column */}
        <div className=" w-full lg:w-[50%] flex flex-col text-left">
          {/* Badge */}
          <span className="text-[#FFB700] text-[10px] sm:text-[11px] font-semibold tracking-[0.17em] uppercase mb-3 sm:mb-4">
            {hero.sub_heading}
          </span>

          {/* Heading */}
          <h1
            className={`${playfair.className} w-full lg:w-[95%] text-[26px] sm:text-2xl md:text-[32px] lg:text-[40px] xl:text-[50px]  text-white mb-4 sm:mb-6 tracking-[0.5px] leading-[110%]`}
          >
            {hero.heading}
          </h1>

          {/* Description */}
          <p
            className={`${poppins.className} text-white w-full lg:w-[85%] font-light text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] tracking-wide mb-4 max-w-2xl`}
          >
            <span className="font-semibold">{hero.content}</span>
            <br />
            {hero.content2}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 ">
            {/* {formId && (
              <NpfPopup
                formId={formId}
                btnClass="bg-[#DE0000] hover:bg-[#b30000] text-white font-semibold text-[13px] sm:text-[14px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[2px] transition-all duration-300 shadow-lg shadow-black/30 whitespace-nowrap"
                btnText={primaryButton.title}
                showIcon={false}
              />
            )} */}

            {formId && (
              <NpfPopup
                formId={formId}
                btnClass={`bg-[#DE0000] hover:bg-[#b30000] text-white font-bold text-[13px] sm:text-[14px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[2px] transition-all duration-300 shadow-lg shadow-black/30 whitespace-nowrap ${heroSection.herobtn.buttonclass || ""}`}
                btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                showIcon={false}
              />
            )}

            {/* {secondaryButton && (
              <CommonLeadPopup
                buttonText={secondaryButton.title}
                buttonClassName="border border-white hover:border-white hover:bg-white/10 text-white font-medium text-[13px] sm:text-[14px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[2px] transition-all duration-300 text-center whitespace-nowrap"
                redirectUrl={secondaryButton.link || "#"}
                form_name="Programme Brochure"
                shadowGradient={false}
              />
            )} */}
          </div>

          {/* Divider */}
          <hr className="border-t border-[#024A4F] mb-4 sm:mb-6 w-full sm:w-[90%]" />

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full sm:w-[90%]">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[#FFB700] text-[11px] sm:text-[12px] 2xl:text-[14px] font-semibold tracking-[0.15em] sm:tracking-[0.17em] 2xl:tracking-[0.10em] uppercase">
                  {stat.label}
                </span>
                <span className="text-white text-[15px] sm:text-[16px] 2xl:text-[18px] font-semibold mt-1">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-[50%] flex justify-center mt-2 lg:mt-0 relative lg:static h-[340px] sm:h-[440px] md:h-[450px] lg:h-auto">
          <div className="absolute hidden lg:block h-full w-[200px] sm:w-[260px] md:w-[300px] lg:w-[330px]  bottom-0 bg-[linear-gradient(0.98deg,#D9D9D900_1.07%,#DE000090_99.48%)]" />
          <div className="absolute  bottom-0 lg:bottom-13  w-[260px] h-[312px] sm:w-[350px] sm:h-[420px] md:w-[410px] md:h-[492px] lg:w-[465px] lg:h-[565px] ">
            <Image
              src={hero.image}
              alt={hero.altText}
              width={1024}
              height={1024}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-2 w-full bottom-0 lg:hidden absolute bg-[#b08233] z-2" />
        </div>
        {/* <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-2 lg:mt-0">
          <div className="rounded-[10px] w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[492px] aspect-[4/3] sm:aspect-square h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden flex items-center justify-center">
            <Image
              src={hero.image}
              alt={hero.altText}
              width={1024}
              height={1024}
              priority
              className="object-top sm:object-cover w-full h-full "
            />
          </div>
        </div> */}
      </div>

      {/* Bottom Announcement Banner */}
      <div
        className={`${poppins.className} w-full bg-[#B08233] py-2.5 sm:py-3.5 text-center text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-wide z-10`}
      >
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap justify-center items-center gap-1">
          <span className="font-semibold">{hero.banner.text}</span>
          <span className="font-light">&nbsp;{hero.banner.text2}&nbsp;</span>
          {hero.banner.linkText && hero.banner.link && (
            <Link
              href={hero.banner.link}
              target="_blank"
              className="underline hover:text-slate-100 transition-colors inline-flex items-center gap-1 font-light"
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

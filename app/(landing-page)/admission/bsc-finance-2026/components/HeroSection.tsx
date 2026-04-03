import Image from "next/image";
import HeroMarquee from "../../CommonComponent2026/HeroMarquee";
import CountdownTimer from "./CountdownTimer";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { bscFinanceBrochureFileName } from "../content";
import { BscFinanceHeroContent, HeroMarqueeSection, StatCard } from "../contentype";

interface HeroSectionProps {
  hero: BscFinanceHeroContent;
  statCards: StatCard[];
  marqueeData: HeroMarqueeSection;
}

const HeroSection = ({ hero, statCards, marqueeData }: HeroSectionProps) => {
  return (
    <>
      {/* Hero — full viewport */}
      <section
        className="relative min-h-svh flex flex-col justify-center"
      >
        {/* Background image via Next.js Image for optimization */}
        <Image
          src="/landingpage/bsc-finance-2026/home-page.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          quality={75}
        />
        {/* Dark gradient overlay — left heavier, right lighter for image visibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(5,10,28,0.55)] via-[rgba(5,10,28,0.35)] to-[rgba(5,10,28,0.10)]" />

        <div className="relative z-[2] max-w-[1200px] mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-24 pb-10 sm:pb-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">

          {/* LEFT — text content */}
          <div className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4 text-white lg:text-left text-center">

            <span className="text-[13px] sm:text-[14px] font-medium tracking-normal text-white">
              {hero.schoolLabel}
            </span>

            <h1
              className="font-bold italic text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[140%] tracking-[-0.02em] text-white m-0"
              style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
            >
              {hero.heading}
            </h1>

            <h2 className="font-medium text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] tracking-normal text-white m-0">
              {hero.subheading}
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] leading-6 tracking-normal text-white max-w-md m-0 lg:mx-0 mx-auto">
              {hero.description}
            </p>

            <CountdownTimer
              targetDate={hero.countdownTargetDate}
              lastDateLabel={hero.lastDateLabel}
            />

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 lg:justify-start justify-center mt-1">
              <NpfPopup
                formId="047a23de933bd996c4c01578fad16790"
                btnClass="npfWidget-047a23de933bd996c4c01578fad16790 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-white hover:bg-white/90 transition-all duration-200 font-semibold text-[14px] leading-5 tracking-normal text-[#344054]"
                btnText={hero.applyBtnLabel}
              />

              <a
                href={hero.brochureBtnHref}
                download={bscFinanceBrochureFileName}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/38 text-white/88 hover:border-white/65 hover:text-white text-sm font-semibold transition-all duration-200 no-underline"
              >
                {hero.brochureBtnLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12l4 4 4-4" />
                </svg>
              </a>
            </div>

          </div>

          {/* RIGHT — stat cards grid (hidden on mobile, shown on lg+) */}
          <div className="hidden lg:grid grid-cols-2 gap-3.5 w-[320px] xl:w-[350px] shrink-0 self-center">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-4 py-6 rounded-2xl gap-2 transition-colors duration-200"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(17, 17, 17, 0.28) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  border: "2px solid #FFFFFF4D",
                }}
              >
                <span
                  className="font-bold italic text-[42px] xl:text-[52px] leading-[100%] tracking-[-0.02em] text-white text-center"
                  style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
                >
                  {card.value}
                </span>
                <span className="font-medium text-[14px] leading-[140%] tracking-normal text-white/80 text-center">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile stat cards — 2x2 grid below the text */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full lg:hidden">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-3 py-4 sm:py-5 rounded-xl gap-1.5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(17, 17, 17, 0.28) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  border: "2px solid #FFFFFF4D",
                }}
              >
                <span
                  className="font-bold italic text-[26px] sm:text-[32px] leading-[100%] tracking-[-0.02em] text-white text-center"
                  style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
                >
                  {card.value}
                </span>
                <span className="font-medium text-[11px] sm:text-[13px] leading-[140%] tracking-normal text-white/80 text-center">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Red marquee — uses existing CommonComponent2026/HeroMarquee */}
      <HeroMarquee data={marqueeData} />
    </>
  );
};

export default HeroSection;

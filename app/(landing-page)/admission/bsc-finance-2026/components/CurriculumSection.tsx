import Image from "next/image";
import { CurriculumSectionData } from "../contentype";

interface CurriculumSectionProps {
  data: CurriculumSectionData;
}

const CurriculumSection = ({ data }: CurriculumSectionProps) => {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(360deg, #FFFFFF 0%, #F3F5F7 100%)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.13) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-10 sm:gap-12">

        {/* Heading */}
        <h2
          className="m-0 text-center font-semibold italic text-[34px] sm:text-[48px] lg:text-[62px] leading-[140%] tracking-[-0.02em]"
          style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
        >
          <span className="text-[#DF3232]">{data.headingRed}</span>
          <span className="text-[#111111]">{data.headingDark}</span>
        </h2>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="flex items-center gap-4 bg-white rounded-xl px-4 py-4 sm:px-5"
              style={{ border: "1px solid #E4E7EC" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#F9FAFB]">
                <Image
                  src={card.iconSrc}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <p
                  className="m-0 font-semibold text-[15px] sm:text-[16px] leading-[22px] tracking-normal text-[#111827]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.title}
                </p>
                <p
                  className="m-0 font-normal text-[13px] sm:text-[14px] leading-5 tracking-normal text-[#565656]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p
          className="m-0 font-semibold text-[14px] sm:text-[16px] leading-6 tracking-normal text-center text-[#0061A6]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {data.footerText}
        </p>

      </div>
    </section>
  );
};

export default CurriculumSection;

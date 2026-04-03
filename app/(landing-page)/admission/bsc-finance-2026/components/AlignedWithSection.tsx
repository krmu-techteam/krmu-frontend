import Image from "next/image";
import { AlignedWithSectionData } from "../contentype";

interface AlignedWithSectionProps {
  data: AlignedWithSectionData;
}

const headingFont = { fontFamily: "'Libre Caslon Condensed', serif" };

const AlignedWithSection = ({ data }: AlignedWithSectionProps) => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-12">

        {/* Heading — Libre Caslon Condensed, 600, italic, 62px, 140% lh, -2% ls */}
        <h2
          className="m-0 text-center font-semibold italic text-[34px] sm:text-[48px] lg:text-[62px] leading-[140%] tracking-[-0.02em]"
          style={headingFont}
        >
          <span className="text-[#DF3232]">{data.headingRed}</span>
          <span className="text-[#1A1A1A]">{data.headingDark}</span>
        </h2>

        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-14 w-full">
          {data.logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              sizes="200px"
              className="h-10 sm:h-12 object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          ))}
        </div>

        {/* Alignment lines — Inter 400, 16px, 24px lh, #344054 */}
        <div className="flex flex-col items-center gap-2 text-center">
          {data.alignmentLines.map((line, idx) => (
            <p
              key={idx}
              className="m-0 font-normal text-[16px] leading-6 tracking-normal text-[#344054]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {line}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AlignedWithSection;

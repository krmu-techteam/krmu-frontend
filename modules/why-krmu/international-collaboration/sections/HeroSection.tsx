import { ParagraphBlock } from "@/lib/types/about";
import { Button } from "@/lib/types/home";
import CommonButton from "@/components/common/Button";
import { INTCOLLABHEROGRID } from "@/lib/types/international-collab";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
 
import Image from "next/image";
import { Globe } from "lucide-react";

type Props = {
  title: ParagraphBlock[];
  desc: string;
  heroBtn: Button;
  heroGrid: INTCOLLABHEROGRID[];
};

const HeroSection = ({ title, desc, heroBtn, heroGrid }: Props) => {
  // Helper to bold K.R. Mangalam University in the first paragraph if present
  const renderParagraph = (text: string, isFirst: boolean) => {
    if (!text) return null;
    const prefix = "K.R. Mangalam University";
    if (isFirst && text.startsWith(prefix)) {
      return (
        <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] font-poppins font-normal text-white">
          <strong className="font-semibold text-white">{prefix}</strong>
          {text.slice(prefix.length)}
        </p>
      );
    }
    return (
      <p className={`text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] font-poppins font-normal ${isFirst ? 'text-white' : 'text-white/80'}`}>
        {text}
      </p>
    );
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      
      {/* Top Split Container - Constrained card layout matching bottom section */}
      <div className="max-w-[1530px] mx-auto w-full px-0 md:px-12 xl:px-16 2xl:px-0 relative z-10 mb-0 md:mb-16">
        <div className="w-full relative rounded-xs overflow-hidden border border-white/[0.05]">
          
          {/* Background Overlays - Contained inside the rounded card (Desktop only) */}
          <div className="absolute inset-0 z-0 hidden xl:flex flex-row">
            <div className="w-1/2 h-full bg-gradient-to-b from-[#1c3850] to-[#000000]" />
            <div className="w-1/2 h-full bg-[#132737]" />
          </div>

          {/* Content Container - No padding on mobile/tablet to allow edge-to-edge column backgrounds */}
          <div className="w-full relative z-10 pt-0 xl:pt-20 px-0 xl:pl-12 xl:pr-24 pb-0">
            <div className="flex flex-col-reverse xl:flex-row items-stretch xl:items-center justify-between gap-0 xl:gap-16">
              
              {/* Left Column: Heading and Description */}
              <div className="w-full xl:w-1/2 flex flex-col items-start text-left px-6 sm:px-10 md:px-16 lg:px-20 xl:px-0 xl:pr-6 py-12 xl:py-12 bg-gradient-to-b from-[#1c3850] to-[#000000] xl:bg-transparent">
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-[38px] 2xl:text-[46px] font-bold leading-[1.15] mb-6 font-serif text-white tracking-tight [&_p]:m-0 xl:whitespace-nowrap">
                  <BlocksRenderer content={title} />
                </div>
                <p className="text-white/75 font-poppins text-justify font-normal text-sm md:text-[15px] xl:text-base leading-relaxed mb-8 max-w-[100%] xl:max-w-[700px]">
                  {desc}
                </p>
                {heroBtn?.buttontext && (
                  <CommonButton
                    variant="primary"
                    href={heroBtn?.buttonlink || "#"}
                    icon={Globe}
                    className={`!bg-[#0055A4] font-poppins hover:!bg-[#004488] ${heroBtn?.buttonclass || ""}`}
                  >
                    {heroBtn?.buttontext}
                  </CommonButton>
                )}
              </div>

              {/* Right Column: World Map & Girl Cutout (Aligned exactly to bottom and right edges) */}
              <div className="w-full xl:w-1/2 relative h-[340px] sm:h-[450px] lg:h-[500px] xl:h-[680px] flex items-end justify-center bg-[#132737] xl:bg-transparent xl:ml-0 xl:-mr-16">
                {/* World Map */}
                <div className="absolute inset-0 w-full h-full opacity-40 xl:opacity-50 pointer-events-none select-none flex items-center justify-center">
                  <div className="relative w-full h-[100%]">
                    <Image
                      src="/modules/why-krmu/international-collaboration/world-map.png"
                      alt="World Map Graphic"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Girl Cutout */}
                <div className="relative w-full h-full z-10 transition-transform duration-500 hover:scale-[1.2] pointer-events-none select-none">
                  <Image
                    src="/modules/why-krmu/international-collaboration/girl.png"
                    alt="International Relations Student"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Container */}
      <div className="max-w-[1530px] mx-auto w-full px-0 md:px-12 xl:px-16 2xl:px-0 relative z-20">
        {/* Banner Layout - Spans full width of the 1530px container */}
        <div className="w-full bg-[#132737] rounded-xs overflow-hidden flex flex-col xl:flex-row items-stretch  border border-white/[0.05]">
          {/* Left Column: Image */}
          <div className="w-full xl:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] xl:min-h-auto">
            <Image
              src="/modules/why-krmu/international-collaboration/girl2.jpg"
              alt="International Collaboration at KRMU"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full xl:w-1/2 p-6 md:p-8 lg:p-10 xl:p-11 flex flex-col justify-center gap-4 lg:gap-5 text-left bg-[#132737] relative z-10">
            {renderParagraph(heroGrid[0]?.content, true)}
            {renderParagraph(heroGrid[1]?.content, false)}
            {renderParagraph(heroGrid[2]?.content, false)}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

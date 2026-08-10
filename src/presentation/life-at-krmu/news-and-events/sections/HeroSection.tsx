import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface HeroSectionProps {
  title: BlocksContent;
  main_desc: BlocksContent;
}

const HeroSection = ({ title, main_desc }: HeroSectionProps) => {
  return (
    <section
      className="relative pt-28 sm:pt-24 md:pt-32 lg:pt-32 2xl:pt-44 overflow-hidden"
      style={{
        background:
          "linear-gradient(108.76deg, #061623 37.33%, #00345F 92.03%)",
      }}
    >
      <div className="max-w-[1530px] mx-auto px-0 md:px-0 lg:px-10 w-full flex flex-col-reverse lg:flex-row items-end justify-between gap-0 lg:gap-8">
        {/* Left Content Column */}
        <div className="w-full lg:w-[55%] xl:w-[58%] flex flex-col justify-center text-white z-10 p-6 md:p-8 lg:p-0 bg-[#061623] lg:bg-transparent rounded-none lg:pb-16 lg:pt-8">
          <div className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[50px] leading-[1.2] mb-3 lg:mb-4 max-w-[950px] [&_p]:m-0 [&_h1]:m-0 [&_h2]:m-0 [&_span]:inline">
            <BlocksRenderer content={title} />
          </div>

          <div className="font-poppins text-sm sm:text-base md:text-[20px] xl:text-[22px] font-normal leading-relaxed text-white/90 max-w-[700px] [&_p]:m-0 [&_p]:leading-relaxed">
            <BlocksRenderer content={main_desc} />
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-[45%] xl:w-[42%] flex justify-center lg:justify-end items-end relative shrink-0 self-end">
          <div className="relative w-full max-w-[550px] sm:max-w-[620px] lg:max-w-[650px] xl:max-w-[850px] flex items-end justify-center lg:justify-end">
            <Image
              src="/images/news-and-events/news-events-girl-hero.png"
              alt="News and Events KRMU"
              width={850}
              height={650}
              priority
              className="object-contain object-bottom w-full h-auto max-h-[420px] sm:max-h-[500px] md:max-h-[540px] lg:max-h-[520px] xl:max-h-[640px] scale-105 sm:scale-110 lg:scale-115 xl:scale-140 origin-bottom translate-x-0 lg:-translate-x-10 xl:-translate-x-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

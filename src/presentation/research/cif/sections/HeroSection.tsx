import Image from "next/image";
import { HeroSectionProps } from "@/features/research/cif";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  const { title, imageUrl } = heroSection;
  return (
    <section className="pt-[25%] md:pt-[7%] pb-3 bg-[url(/research/cifbg.webp)] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:lft-0 before:w-full before:h-full before:bg-[#ffffffcc] px-6 md:px-7 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full md:flex items-center justify-between">
        <div className="md:w-1/3 flex justify-center md:block">
          <Image
            src={imageUrl}
            width={328}
            height={320}
            alt="Cif Logo"
            className="z-10 relative h-80"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl mt-12 sm:text-4xl md:text-[55px] text-[#0162b0] z-10 relative font-semibold text-center leading-[1.2] mb-10">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

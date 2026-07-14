import { HeroSectionProps } from "@/features/research/research-centre/types";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  const { title } = heroSection;
  return (
    <section className="pt-[140px] pb-[50px]  md:pt-[10%] md:pb-[5%] bg-[#0B3D66]">
      <div className="max-w-[1530px] mx-auto text-center text-white px-6 md:px-7 xl:px-16">
        <h1 className="text-2xl md:text-[64px] font-semibold">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

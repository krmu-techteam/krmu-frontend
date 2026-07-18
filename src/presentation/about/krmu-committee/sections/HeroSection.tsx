import { HeroSection as HeroSectionType } from "@/features/about/krmu-committee";

type Props = HeroSectionType;

const HeroSection: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-t p-12 from-[#061623] from-40% to-[#0C385D] to-100% mx-auto w-full text-white text-center">
      <h1 className="mb-5 text-3xl sm:text-4xl md:text-[64px] font-semibold">
        {title}
      </h1>
      <p className="font-poppins max-w-5xl mx-auto">{description}</p>
    </div>
  );
};

export default HeroSection;

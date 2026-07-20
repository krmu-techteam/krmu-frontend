import SectionDivider from "@/components/common/SectionDivider";

interface NextGenerationSectionProps {
  thenexgentitle: string;
  thenexgendescription: string;
}
const NextGenerationSection = ({
  thenexgentitle,
  thenexgendescription,
}: NextGenerationSectionProps) => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-20 px-6 md:px-8 xl:px-16">
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <h2 className="font-serif text-center md:text-pretty lg:text-center text-[24px] md:text-[34px]  lg:text-[42px] font-medium md:leading-[1.2] leading-[1.4] mb-6 md:mb-8 tracking-wide">
          {thenexgentitle}
        </h2>
        <p className="text-white/90 text-center md:text-justify lg:text-center text-[15px] sm:text-[16px] leading-[1.8] font-poppins max-w-[980px] mx-auto font-light">
          {thenexgendescription}
        </p>
      </div>
      <SectionDivider />
    </section>
  );
};

export default NextGenerationSection;

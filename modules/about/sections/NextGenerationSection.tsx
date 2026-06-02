import SectionDivider from "@/components/common/SectionDivider";

interface NextGenerationSectionProps {
  thenexgentitle: string;
  thenexgendescription: string;
}
const NextGenerationSection = ({thenexgentitle, thenexgendescription}: NextGenerationSectionProps) => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2 className="font-serif text-[34px] sm:text-[48px] md:text-[58px] lg:text-[42px] font-semibold leading-[1.2] tracking-[-1px] mb-8 sm:mb-10">
            {thenexgentitle}
          </h2>
          <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.8] font-poppins max-w-[1000px] mx-auto font-light">
            {thenexgendescription}
          </p>
        </div>
        <SectionDivider />
      </section>
  )
}   

export default NextGenerationSection;    
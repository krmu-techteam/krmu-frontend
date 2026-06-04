import SectionDivider from "@/components/common/SectionDivider";

interface NextGenerationSectionProps {
  thenexgentitle: string;
  thenexgendescription: string;
}
const NextGenerationSection = ({thenexgentitle, thenexgendescription}: NextGenerationSectionProps) => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2 className="font-serif text-pretty lg:text-center text-[34px]  lg:text-[42px] font-semibold leading-[1.2] tracking-[-1px] mb-8">
            {thenexgentitle}
          </h2>
          <p className="text-white/90 text-justify lg:text-center text-[15px] sm:text-[16px] leading-[1.8] font-poppins max-w-[1000px] mx-auto font-light">
            {thenexgendescription}
          </p>
        </div>
        <SectionDivider />
      </section>
  )
}   

export default NextGenerationSection;    
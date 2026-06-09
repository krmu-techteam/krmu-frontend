import { AlumniCarousel, AlumniSectionProps } from "@/modules/school";
import SectionDivider from "@/components/common/SectionDivider";

const AlumniSection = ({ title, alumniLogos }: AlumniSectionProps) => {
  return (
    <section className="relative pt-5 md:pt-20 pb-10 md:pb-16 px-4 mt-10 sm:mt-0">
      <div className="max-w-[1530px] mx-auto w-full text-center">
        <h3 className="heading-primary mb-6 md:mb-8">{title}</h3>
        <div className="w-full">
          <AlumniCarousel AluLogos={alumniLogos} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AlumniSection;

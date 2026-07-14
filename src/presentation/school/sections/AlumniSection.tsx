import { AlumniCarousel } from "@/presentation/school/components";
import { AlumniSectionProps } from "@/features/school/types";;
import SectionDivider from "@/components/common/SectionDivider";

const AlumniSection = ({ title, alumniLogos }: AlumniSectionProps) => {
  return (
    <section className="relative pt-5 md:pt-12 xl:pt-16 pb-10 md:pb-12 xl:pb-16 mt-10 sm:mt-0 px-8 lg:px-11 2xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full text-center">
        <h3 className="heading-primary mb-4 xl:mb-8">{title}</h3>
        <div className="w-full">
          <AlumniCarousel AluLogos={alumniLogos} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AlumniSection;

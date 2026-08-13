import { AlumniCarousel } from "@/presentation/school/components";
import { AlumniSectionProps } from "@/features/school";
import SectionDivider from "@/components/common/SectionDivider";

const AlumniSection = ({ title, alumniLogos }: AlumniSectionProps) => {
  return (
    <section className="relative pt-10 md:pt-12 xl:pt-16 pb-10 md:pb-12 xl:pb-16">
      <div className="max-w-[1440px] mx-auto w-full text-center px-0 md:px-8 xl:px-12">
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

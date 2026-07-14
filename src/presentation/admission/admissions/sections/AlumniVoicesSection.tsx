import { Adm2Alumni } from "@/lib/types/admission2";
import { AlumniCarousel } from "../components";
import SectionDivider from "@/components/common/SectionDivider";
 

type Props = {
  admAlumni: Adm2Alumni[];
};

const AlumniVoicesSection = ({ admAlumni }: Props) => {
  return (
    <section className="relative z-4 py-8 md:py-12 lg:py-16 px-6 md:px-8 lg:px-11 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="heading-primary mb-4">
            Voices of Our Alumni
          </h2>
          <p className="text-white/90 text-md font-poppins">
            Our Success Stories
          </p>
        </div>
        <div>
          <AlumniCarousel alumniData={admAlumni} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AlumniVoicesSection;

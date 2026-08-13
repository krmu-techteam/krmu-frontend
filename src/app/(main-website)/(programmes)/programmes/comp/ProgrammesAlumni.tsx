import { ProgrammeAlumniData } from "@/lib/types/programme";
import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammesAlumni = ({ alumniData }: Props) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-8 xl:px-12 text-center">
        <h3 className="mb-4 heading-primary">Voices of Our Alumni</h3>
        <p className="mb-10 font-poppins text-white/80">Our Success Stories</p>
        <div>
          <ProgrammeAlumniSlides alumniData={alumniData} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ProgrammesAlumni;

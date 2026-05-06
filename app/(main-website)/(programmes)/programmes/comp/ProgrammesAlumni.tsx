import { ProgrammeAlumniData } from "@/lib/types/programme";
import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammesAlumni = ({ alumniData }: Props) => {
  return (
    <section className="py-20 bg-[#f9f9f9] mt-20">
      <div className="max-w-[1440px] mx-auto w-full text-center">
        <h3 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-semibold">
          Voices of Our Alumni
        </h3>
        <p className="mb-10">
          Our Success Stories
        </p>
        <div>
          <ProgrammeAlumniSlides alumniData={alumniData} />
        </div>
      </div>
    </section>
  );
};

export default ProgrammesAlumni;

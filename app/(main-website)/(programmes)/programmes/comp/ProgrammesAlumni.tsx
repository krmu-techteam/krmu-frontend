import { ProgrammeAlumniData } from "@/lib/types/programme";
import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammesAlumni = ({ alumniData }: Props) => {
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto w-full text-center">
        <h3 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-semibold">
          Voices of Our Alumni
        </h3>
        <p className="">
          Our Success Stories
        </p>
        <div className="mt-5">
          <ProgrammeAlumniSlides alumniData={alumniData} />
        </div>
      </div>
    </section>
  );
};

export default ProgrammesAlumni;

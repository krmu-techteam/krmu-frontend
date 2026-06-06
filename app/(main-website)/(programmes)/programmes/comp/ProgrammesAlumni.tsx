import { ProgrammeAlumniData } from "@/lib/types/programme";
import ProgrammeAlumniSlides from "./ProgrammeAlumniSlides";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammesAlumni = ({ alumniData }: Props) => {
  return (
    <section className="py-16">
      <div className="max-w-[1530px] mx-auto w-full text-center pr-13 pl-10">
        <h3 className="mb-4 text-3xl md:text-5xl lg:text-6xl text-white font-semibold">
          Voices of Our Alumni
        </h3>
        <p className="mb-10 font-poppins text-white/80">
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

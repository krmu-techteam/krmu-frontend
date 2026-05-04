import { Adm2Alumni } from "@/lib/types/admission2";
import Admission2AlumniSlides from "./Admission2AlumniSlides";

type Props = {
  admAlumni: Adm2Alumni[];
};

const Admission2Alumni = ({ admAlumni }: Props) => {
  return (
    <section className="py-16 md:py-20 bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-3">
            Voices of Our Alumni
          </h3>
          <p className="text-sm md:text-base text-gray-400 font-medium">
            Our Success Stories
          </p>
        </div>
        <div className="px-6 md:px-10">
          <Admission2AlumniSlides alumniData={admAlumni} />
        </div>
      </div>
    </section>
  );
};

export default Admission2Alumni;

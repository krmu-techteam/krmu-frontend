import { Adm2Alumni } from "@/lib/types/admission2";
import Admission2AlumniSlides from "./Admission2AlumniSlides";

type Props = {
  admAlumni: Adm2Alumni[];
};

const Admission2Alumni = ({ admAlumni }: Props) => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-0 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Voices of Our Alumni
          </h2>
          <p className="text-sm md:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Our Success Stories
          </p>
        </div>
        <div className="md:px-10">
          <Admission2AlumniSlides alumniData={admAlumni} />
        </div>
      </div>
    </section>
  );
};

export default Admission2Alumni;

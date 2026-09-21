// import { StrapiMedia } from "@/lib/types/common";
import { AlumniMedia, StrapiMedia } from "@/lib/types/common";
import AlumniCarousel from "./schoolglobalcomponent/AlumniCarousel";

type Props = {
  title: string;
  alumniLogos: AlumniMedia[] | StrapiMedia[];
};

const SchoolOurAlumni = ({ title, alumniLogos }: Props) => {
  return (
    <section className="pt-5 md:pt-20 px-4 mt-10 sm:mt-0">
      <div className="max-w-[1664px] mx-auto w-full text-center">
        <h3 className="text-2xl sm:text-4xl font-semibold">{title}</h3>
        <div className="w-full">
          <AlumniCarousel AluLogos={alumniLogos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolOurAlumni;

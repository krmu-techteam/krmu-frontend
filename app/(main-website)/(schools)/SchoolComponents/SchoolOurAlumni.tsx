// import { StrapiMedia } from "@/lib/types/common";
import { AlumniMedia, StrapiMedia } from "@/lib/types/common";
import AlumniCarousel from "./schoolglobalcomponent/AlumniCarousel";



type Props = {
  title: string;
  alumniLogos: AlumniMedia[] | StrapiMedia[];
};

const SchoolOurAlumni = ({ title, alumniLogos }: Props) => {
  return (
    <section className="py-5 md:py-10 md:py-0 px-4">
      <div className="max-w-[1664px] mx-auto w-full text-center">
        <h3 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h3>
        <div className="w-full">
          <AlumniCarousel AluLogos={alumniLogos} />
        </div>
      </div>
    </section>
  );
};

export default SchoolOurAlumni;

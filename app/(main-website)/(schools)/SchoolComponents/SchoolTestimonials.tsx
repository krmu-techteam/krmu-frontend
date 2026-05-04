import { SchoolTestimonials as testimonialsData } from "@/lib/types/schools";
import SchoolTestimonialsCard from "./SchoolTestimonialsCard";

type Props = {
  title: string;
  desc: string;
  testis: testimonialsData[];
};

const SchoolTestimonials = ({ title, desc, testis }: Props) => {
  return (
    <section className="pt-10 sm:pt-20 pb-32 sm:py-20 bg-white px-4">
      <div className="max-w-[1664px] mx-auto w-full xl:flex items-center">
        <div className="w-full xl:w-2/5">
          <h4 className="text-3xl md:text-5xl font-semibold leading-[1.2] max-w-2xs">
            {title}
          </h4>
          <p className="mt-2">{desc}</p>
        </div>
        <div className="w-full xl:w-3/5">
          <div className="">
            <SchoolTestimonialsCard testimonials={testis} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTestimonials;

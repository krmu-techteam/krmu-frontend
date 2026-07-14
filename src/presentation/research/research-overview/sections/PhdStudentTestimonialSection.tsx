import { PhdTestimonialCard } from "../components";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  quote: string;
};

type Props = {
  testimonials: Testimonial[];
};

const PhdStudentTestimonialSection = ({ testimonials }: Props) => {
  return (
    <section className="pt-20 pb-40 px-4 res-over-sec">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="heading-primary mb-10 text-white">
          <h2 className="text-[32px] font-semibold mb-2.5 text-center">
            Students Testimonials
          </h2> 
        </div>
        <div className="mt-10">
          <PhdTestimonialCard testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default PhdStudentTestimonialSection;

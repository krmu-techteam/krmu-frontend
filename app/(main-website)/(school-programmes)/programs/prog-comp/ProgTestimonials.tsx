export type TestimonialItem = {
  image: string;
  videoUrl?: string;
  quote: string;
  name: string;
  programme: string;
};

// Testimonials section
export type TestimonialsSection = {
  subheading: string;
  heading: string; // supports <br />
  testimonials: TestimonialItem[];
};

import ProgTestimonialCard from "./ProgTestimonialCard";

type Props = {
  data: TestimonialsSection;
};

const ProgTestimonials = ({ data }: Props) => {
  return (
    <section className="py-10 sm:pt-20 px-4 overflow-hidden w-full">
      <div className="w-full mx-auto">
        {/* Header */}

        <div className="w-full text-center">
          <h4
            className="text-xl md:text-3xl"
            dangerouslySetInnerHTML={{
              __html: data.subheading,
            }}
          />
          <h3
            className="text-2xl md:text-[40px] font-semibold text-[#013fa1]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        </div>

        {/* Carousel */}
        <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {data.testimonials &&
            data.testimonials.map((item, index) => (
              <ProgTestimonialCard key={index} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProgTestimonials;

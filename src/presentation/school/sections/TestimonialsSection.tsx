 
import { TestimonialCard } from "@/presentation/school/components";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { TestimonialSectionProps } from "@/features/school";;

const TestimonialsSection = ({ title, desc, testis }: TestimonialSectionProps) => {
  return (
    <section className="py-12 xl:py-20 px-6 md:px-8 lg:px-11 2xl:px-16 font-poppins relative overflow-hidden bg-transparent">
      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        <div className="mb-12 max-w-4xl">
          <h4 className="text-white text-3xl md:text-5xl font-bold mb-4 font-serif">
            {title}
          </h4>
          <p className="text-gray-300 text-lg">{desc}</p>
        </div>

        <div className="relative">
          <Carousel
            options={{ align: "start", loop: true }}
            showArrows={true}
            showDots={true}
            autoplayDelay={3000}
            prevArrowClassName="!bg-[#e32831] !border-none !text-white !rounded-sm hover:!bg-red-700 !w-10 !h-10 -left-4 md:-left-12 opacity-100"
            nextArrowClassName="!bg-[#e32831] !border-none !text-white !rounded-sm hover:!bg-red-700 !w-10 !h-10 -right-4 md:-right-12 opacity-100"
            activeDotClassName="bg-[#e32831] w-2 h-2"
            dotClassName="bg-white/40 w-2 h-2"
            containerClassName="-ml-6"
            slideClassName="pl-6 md:basis-1/2"
          >
            {testis && testis.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial?.name}
                edu={testimonial?.education}
                desc={testimonial?.info}
                img={testimonial?.userimg}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default TestimonialsSection;

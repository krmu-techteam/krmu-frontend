import { HearItTestimonials } from "@/lib/api/lkoverview";
import { StudentTestimonialsCarousel } from "../components";
import { StudentTestimonialSectionProps } from "@/features/life-at-krmu/overview/types";

type Props = {
  overviewData: Promise<{ hear_it_testimonials: HearItTestimonials[] }>;
  studentTestimonialSection: StudentTestimonialSectionProps;
};

const StudentTestimonialsSection = async ({
  overviewData,
  studentTestimonialSection,
}: Props) => {
  const { hear_it_testimonials } = await overviewData;
  const { title, description } = studentTestimonialSection;
  return (
    <section className="font-poppins pb-20 sm:pb-0 py-8 md:py-16 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="xl:flex items-center text-[#051630] gap-16">
          <div className="xl:w-[40%] text-center xl:text-left">
            <h4 className="text-[32px] md:text-5xl leading-tight font-bold mb-6 text-[#051630]">
              {title}
            </h4>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto xl:mx-0 mb-8">
              {description}
            </p>
          </div>
          <div className="xl:w-[60%] mt-12 xl:mt-0 relative">
            <StudentTestimonialsCarousel testiData={hear_it_testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;

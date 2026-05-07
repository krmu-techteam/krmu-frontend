import { HearItTestimonials } from "@/lib/api/lkoverview";
import OverviewTestimonial from "./OverviewTestimonial";

type Props = {
  testimonials: HearItTestimonials[];
};

const OverviewHearit = ({ testimonials }: Props) => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="xl:flex items-center text-[#051630] gap-16">
          <div className="xl:w-[40%] text-center xl:text-left">
            <h4 className="text-[32px] md:text-5xl leading-tight font-bold mb-6 text-[#051630]">
              Hear it from the <br className="hidden lg:block" /> students themselves
            </h4>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto xl:mx-0 mb-8">
              Discover what our satisfied students and alumni have to say about
              their transformative experiences at KRMU
            </p>
          </div>
          <div className="xl:w-[60%] mt-12 xl:mt-0 relative">
            <OverviewTestimonial testiData={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHearit;

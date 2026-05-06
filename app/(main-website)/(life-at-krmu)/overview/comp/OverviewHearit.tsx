import { HearItTestimonials } from "@/lib/api/lkoverview";
import OverviewTestimonial from "./OverviewTestimonial";

type Props = {
  testimonials: HearItTestimonials[];
};

const OverviewHearit = ({ testimonials }: Props) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-12 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="xl:flex items-center text-white gap-16">
          <div className="xl:w-[40%] text-center xl:text-left">
            <h4 className="text-[28px] md:text-5xl lg:text-6xl xl:text-[64px] leading-tight font-bold mb-6">
              Hear it from the students themselves
            </h4>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              Discover what our satisfied students and alumni have to say about
              their transformative experiences at KRMU
            </p>
          </div>
          <div className="xl:w-[60%] mt-12 xl:mt-0">
            <OverviewTestimonial testiData={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHearit;

import PhdTestimonialCards from "./PhdTestimonialCards";

const PhdStudentTestimonials = () => {
  return (
    <section className="pt-20 pb-40 px-4 res-over-sec">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="whyphdHeading relative">
          <h2 className="text-[32px] font-semibold mb-2.5 text-center">
            Students Testimonials
          </h2>
          <div
            className="faded-text font-bold text-gray-300 opacity-30
      tracking-wide uppercase
      select-none pointer-events-none"
          >
            Students Testimonials
          </div>
          <div className="custom-border absolute left-[50%] translate-x-[-50%]"></div>
        </div>
        <div className="mt-10">
          <PhdTestimonialCards />
        </div>
      </div>
    </section>
  );
};

export default PhdStudentTestimonials;

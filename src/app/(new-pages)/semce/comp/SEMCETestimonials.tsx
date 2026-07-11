import Image from "next/image";
import SEMCETestimonialSlide from "./SEMCETestimonialSlide";

const SEMCETestimonials = () => {



  return (
    <>
      <section className="px-5 sm:px-0 py-10">
        <div className="max-w-[1664px] mx-auto w-full">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10">
            Testimonials of Students
          </h3>
        </div>
        <div className="overflow-hidden w-full">
          <SEMCETestimonialSlide />
        </div>
        <div className="flex justify-center bg-[url(/wp-content/semce/black-grid.webp)]">
          <Image
            src="/semce/circle-grid-2.svg"
            width={1100}
            height={895}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default SEMCETestimonials;

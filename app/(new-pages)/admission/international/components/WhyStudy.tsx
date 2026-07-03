import WhyStudySlide from "./WhyStudySlide";

const WhyStudy = () => {
  return (
    <section className="bg-[linear-gradient(98.17deg,#001732_55.07%,#004698_99.64%)] overflow-hidden pb-20 sm:pb-0 md:pl-20 px-5 ">
      <div className="mx-auto py-10 md:py-20 flex flex-col md:flex-row items-center pr-5">
        <div className="w-full md:w-1/2 text-white">
          <h3 className="font-poppins text-4xl xl:text-6xl font-bold mb-5">Why Study in India?</h3>
          <h4 className="text-lg mb-2.5 sm:mb-0 sm:text-3xl font-semibold font-fraunces">The World's Fastest-Growing <br /> Knowledge Economy</h4>
        </div>
        <div className="w-full md:w-1/2 text-white">
          <p className="text-sm sm:text-lg">
            India is no longer just a study destination — it's where the world's
            next wave of innovation, technology, and leadership is being built.
            Here's why international students choose India.
          </p>
        </div>
      </div>
      <div className="w-full z-30 relative why-slide-card-container">
        <WhyStudySlide />
      </div>
    </section>
  );
};

export default WhyStudy;

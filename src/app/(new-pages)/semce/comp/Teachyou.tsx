import TeachYouSlide from "../extraComp/TeachYouSlide";

const Teachyou = () => {
  return (
    <section className="px-5  xl:px-0">
      <div className="py-10 flex items-center flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 xl:ml-20 xl:pl-10">
          <h4 className="text-2xl md:text-3xl text-[#CA1B1F] mb-5">
            WHO'll TEACH YOU?
          </h4>
          <h3 className="text-3xl md:text-5xl  2xl:text-7xl instrument-serif">
            Each course is taught by <br className="hidden md:block" />{" "}
            Experienced Instructors <br className="hidden md:block" /> &
            Industry Experts
          </h3>
        </div>
        <div className="w-full lg:w-1/2 overflow-hidden">
          <TeachYouSlide />
        </div>
      </div>
    </section>
  );
};

export default Teachyou;

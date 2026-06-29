const HeroSection = () => {
  return (
    <section className="bg-[#edece4] relative px-5 2xl:px-0 py-10 xl:py-0">
      <div className="bg-white absolute right-0 top-0 max-w-[600px] w-full h-[850px] form-white-container hidden xl:block"></div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1664px] mx-auto">
        <div className="w-full md:w-1/2 xl:w-8/12 flex items-start left-container">
          <div className="w-full xl:w-1/2 2xl:w-3/5 col-1">
            <h1 className="font-host text-5xl md:text-6xl xl:text-8xl font-extrabold mb-5 leading-none main-heading">
              International Admissions
            </h1>
            <h4 className="text-2xl lg:text-3xl text-[#E11F23] font-bold font-host main-heading-2">
              Open For The Session 2026–27
            </h4>
            <h5 className="text-[#001732] italic text-4xl lg:text-5xl mb-5 leading-tight font-fraunces mt-5">
              Study in India. <br className="hidden md:block" /> Lead the World.
            </h5>
            <p className="md:max-w-[488px] font-inter">
              Join one of India's fastest-growing{" "}
              <strong>NAAC ‘A’ accredited</strong> universities and experience
              internationally recognised education in the heart of Gurugram,
              India's leading corporate and innovation hub.
            </p>

            <div className="xl:hidden mt-5">
              <span className="text-4xl xl:text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-6xl xl:text-9xl leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-3xl xl:text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
            </div>
          </div>
          <div className="hidden xl:block w-1/2 2xl:w-2/5 col-2">
            <div className="2xl:-mt-12 text-center middle-container">
              <span className="text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-9xl leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
              <p
                className="
 bg-[linear-gradient(347.33deg,_#CAC492_9.54%,_#CB000D_68.63%)]
    bg-clip-text
    text-transparent
    [-webkit-background-clip:text]
    [-webkit-text-fill-color:transparent]
    opacity-20
    font-bold
    text-7xl
    2xl:text-[90px]
    leading-none
    font-big-shoulder
    heading-4
  "
              >
                Scholarship
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px] xl:h-[850px] md:w-1/2 bg-white xl:bg-transparent xl:w-4/12 relative outer-right-container"></div>
      </div>
    </section>
  );
};

export default HeroSection;

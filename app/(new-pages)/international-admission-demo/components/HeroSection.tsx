const HeroSection = () => {
  return (
    <section className="bg-[#edece4] relative">
      <div className="bg-white absolute right-0 top-0 max-w-[600px] w-full h-[850px]"></div>
      <div className="flex items-center gap-10 max-w-[1664px] mx-auto">
        <div className="w-8/12 flex items-start">
          <div className="w-1/2 2xl:w-3/5">
            <h1 className="font-host text-8xl font-extrabold mb-5 leading-none">
              International Admissions
            </h1>
            <h4 className="text-3xl text-[#E11F23] font-bold font-host">
              Open For The Session 2026–27
            </h4>
            <h5 className="text-[#001732] italic text-5xl mb-5 leading-tight font-fraunces mt-5">
              Study in India. <br /> Lead the World.
            </h5>
            <p className="max-w-[488px] font-inter">
              Join one of India's fastest-growing{" "}
              <strong>NAAC ‘A’ accredited</strong> universities and experience
              internationally recognised education in the heart of Gurugram,
              India's leading corporate and innovation hub.
            </p>
          </div>
          <div className="w-1/2 2xl:w-2/5">
            <div className="-mt-12 text-center">
              <span className="text-6xl text-[#001732] font-bold font-fraunces">
                Up to
              </span>
              <p className="text-9xl leading-none text-[#E11F23] font-bold font-fraunces">
                60<span className="font-light">%</span>
              </p>
              <span className="text-[40px] text-[#001732] font-bold font-fraunces">
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
    text-[90px]
    leading-none
    font-big-shoulder
  "
              >
                Scholarship
              </p>
            </div>
          </div>
        </div>
        <div className="h-[850px] w-4/12 relative"></div>
      </div>
    </section>
  );
};

export default HeroSection;

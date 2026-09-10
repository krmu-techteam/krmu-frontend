const SystemWideTrend = () => {
  return (
    <section className="px-5 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-center gap-2 lg:gap-16">
        {/* Heading */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.4em] uppercase text-[#8d5552] mb-2">
            System-wide trend
          </h3>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#001836] mb-2 md:mb-0 font-newsreader">
            Consistent growth in outcomes.
          </h1>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <p className="text-sm sm:text-base leading-6 sm:leading-7 text-[#001836]/80 max-w-xl">
            Median compensation has shown a steady upward trajectory across the
            last three completed academic years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemWideTrend;

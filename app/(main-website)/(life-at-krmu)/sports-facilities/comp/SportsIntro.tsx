const SportsIntro = () => {
  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#051630]">
            Introduction
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-pretty">
            K.R. Mangalam University provides cutting-edge facilities aimed at
            nurturing not just academic excellence but also physical fitness and
            sportsmanship among its student body. With sprawling campuses
            equipped with numerous playgrounds and indoor courts, the University
            creates an environment conducive to holistic development.
          </p>
        </div>

        {/* Video Content */}
        <div className="order-1 lg:order-2 w-full max-w-[600px] lg:max-w-none mx-auto">
          <div className="relative aspect-video  md:rounded-[2px] overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FECIXDXykNQ?si=RsQbYLpsUplW6CC4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsIntro;

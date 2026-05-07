const SportsHero = () => {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center pt-[160px] pb-12 md:pt-[180px] lg:pt-[220px] md:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-[url(/universitybg.webp)] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Premium subtle blue vignette overlay */}
      <div className="absolute inset-0 bg-[#051630]/30 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051630]/70 via-transparent to-[#051630]/20" />
      
      <div className="relative max-w-[1440px] mx-auto w-full text-white text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-2xl leading-[1.1]">
          Sports Facilities at <br className="hidden sm:block" /> K.R. Mangalam University
        </h1>
        
        <h2 className="text-sm sm:text-base md:text-lg opacity-95 max-w-3xl mx-auto drop-shadow-xl leading-relaxed">
          Ignite Your Passion for Sports: Dive into Our World-Class Sports
          Facilities at K.R. Mangalam University
        </h2>
      </div>
    </section>
  );
};

export default SportsHero;

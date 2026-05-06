const OverviewLifeBeyond = () => {
  return (
    <section 
      className="bg-[url(/gradient-2.webp)] bg-cover bg-no-repeat bg-center py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20" 
      id="lifeBeyond"
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold leading-tight mb-8">
            A Life Beyond <br className="hidden md:block" /> Academics
          </h2>
          <p className="text-lg md:text-xl text-white/90 text-center md:text-left leading-relaxed">
            Welcome to a world where education meets excitement! At K.R.
            Mangalam University (KRMU), we believe that university life should
            be a perfect blend of learning, growth, and fun. Our campus is not
            just a place to study; it’s where you’ll make memories that last a
            lifetime.
          </p>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video rounded-xs overflow-hidden border border-white/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/fvbEreUXZVU?si=OA22YOD_02bqdkn_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};


export default OverviewLifeBeyond;

const OurRecruitersHeroSection = () => {
  return (
    <>
      {/* Desktop & Tablet Hero - Exactly as before */}
      <section className="hidden md:block relative pt-24 sm:pt-32 md:pt-40 lg:pt-44 xl:pt-48 pb-12 md:pb-24 bg-[url(/placements/recruit-banner.webp)] bg-cover bg-no-repeat bg-right lg:bg-[95%_center] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        <div className="relative max-w-[1440px] mx-auto w-full text-white">
          <div className="w-full sm:w-[85%] md:w-[65%] lg:w-[55%] xl:w-[50%] space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-semibold leading-[1.1]">
              Meet Our Top <br className="hidden lg:block" /> Recruiters
            </h1>
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
              <p>
                K.R. Mangalam University has built a strong legacy of academic
                excellence and industry-focused education. Our emphasis on
                experiential learning, skill development, and professional grooming
                has led to consistent and growing trust from top recruiters.
              </p>
              <p>
                Each year, renowned companies across sectors such as IT, Finance,
                Consulting, Education, Media, Healthcare, Legal, and more visit
                our campus to hire skilled and job-ready graduates. These
                organisations value the innovation, adaptability, and work ethics
                our students bring to the workplace.
              </p>
              <p>
                From global corporations to emerging startups, our recruiters
                represent a wide spectrum of career possibilities for our
                students. The presence of such leading names reflects our
                commitment to delivering quality education that aligns with
                industry standards.
              </p>
              <p>
                We are proud to showcase some of our prominent recruiters whose
                collaboration strengthens our placement ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero - Optimized with overlapping text */}
      <div className="md:hidden relative min-h-[140vh] bg-[#09215b] flex flex-col justify-end overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url(/placements/recruit-banner.webp)] bg-cover bg-no-repeat bg-[position:85%_top]" 
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09215b]/30 to-[#09215b]" />

        {/* Text Content */}
        <div className="relative z-10 p-6 pt-[45vh] pb-20 text-white space-y-4">
          <h1 className="text-[24px] font-semibold leading-[1.2] text-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
            Meet Our Top Recruiters
          </h1>
          <div className="space-y-4 text-[14px] leading-relaxed opacity-100 text-shadow-[1px_1px_8px_rgba(0,0,0,0.7)]">
            <p>
              K.R. Mangalam University has built a strong legacy of academic
              excellence and industry-focused education. Our emphasis on
              experiential learning, skill development, and professional grooming
              has led to consistent and growing trust from top recruiters.
            </p>
            <p>
              Each year, renowned companies across sectors such as IT, Finance,
              Consulting, Education, Media, Healthcare, Legal, and more visit
              our campus to hire skilled and job-ready graduates.
            </p>
            <p>
              These organisations value the innovation, adaptability, and work ethics
              our students bring to the workplace.
            </p>
            <p>
              We are proud to showcase some of our prominent recruiters whose
              collaboration strengthens our placement ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRecruitersHeroSection;

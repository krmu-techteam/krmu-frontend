const HeroSection = () => {
  return (
    <section>
      <div className="max-w-[1664px] mx-auto w-full pt-10 pb-0 sm:pt-24 md:pt-28 lg:pt-30 flex font-poppins">
        <div className="w-[40%]">
          <p className="text-base font-bold">Engineer Intelligent Robots for an AI-Driven World</p>
          <h1 className="text-6xl font-bold mb-2.5 leading-[70px]">B.Tech. CSE (Robotics & Artificial Intelligence)</h1>
          <h2 className="text-xl mb-1.5 max-w-[480px]">
            with Academic Support of IBM & Powered by Microsoft Certifications
          </h2>
          <p className="text-sm max-w-[510px] leading-5">
            Graduate with expertise in robot design, computer vision, machine
            learning, and AI-powered autonomous systems, strengthened by
            IBM-backed industry certifications and Microsoft credentials.
          </p>
          <div>
            <button>Apply Now</button>
            <button>Download Prospectus</button>
            <div className="flex">
              <div className="w-1/3"></div>
              <div className="w-1/3"></div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
        <div className="w-[60%]"></div>
      </div>
    </section>
  );
};

export default HeroSection;

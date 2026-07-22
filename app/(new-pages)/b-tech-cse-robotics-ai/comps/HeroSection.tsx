import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#BDCBCF_-1.04%,#BCD5E2_101.28%)] relative overflow-hidden">
      <Image
        src="/ellipse.svg"
        width={639}
        height={639}
        alt="Ellipse"
        className="absolute -left-24 top-0"
      />

      <div className="max-w-[1564px] mx-auto w-full pt-44 flex font-poppins z-20 relative">
        <Image
          src="/ai-ml.svg"
          width={920}
          height={494}
          alt="AI ML"
          className="absolute bottom-0 right-[5%]"
        />
        <div className="w-1/2 z-20 relative">
          <p className="text-base font-bold">
            Engineer Intelligent Robots for an AI-Driven World
          </p>
          <h1
            className="
                      text-7xl
                      leading-[1.2]
                      max-w-[800px]
                      font-bold
                      mb-2.5
                      my-2.5
                      bg-[linear-gradient(89.96deg,_#001732_0.03%,_#004698_78.3%)]
                      bg-clip-text
                      text-transparent
                    "
          >
            B.Tech. CSE (Robotics &amp; Artificial Intelligence)
          </h1>
          <h2 className="text-xl mb-1.5 max-w-[480px]">
            with Academic Support of IBM & Powered by Microsoft Certifications
          </h2>
          <p className="text-sm max-w-[510px] leading-5">
            Graduate with expertise in robot design, computer vision, machine
            learning, and AI-powered autonomous systems, strengthened by
            IBM-backed industry certifications and Microsoft credentials.
          </p>
          <div className="space-x-5 leading-8 font-semibold text-sm mt-7">
            <button className="bg-[#DE0000] text-white rounded-[5px] px-5 py-1 uppercase">
              Apply Now
            </button>
            <button className="bg-white text-[#012959] rounded-[5px] px-5 py-1 uppercase">
              Download Prospectus
            </button>
          </div>
          <div className="flex mt-6 space-x-2.5 mb-10">
            <div className="w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#A2C6D2] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">56.6 LPA</h3>
              <h4 className="text-lg font-light leading-none">Highest Package</h4>
            </div>
              <div className="w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#B0C4CC] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">800+</h3>
              <h4 className="text-lg font-light leading-none">Campus Recruiters</h4>
            </div>
              <div className="w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#CCDBE3] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">100%</h3>
              <h4 className="text-lg font-light leading-none">Placement</h4>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center z-20 relative">
          <Image
            src="/robotic-hand.png"
            width={537}
            height={652}
            alt="Robotic Hand"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

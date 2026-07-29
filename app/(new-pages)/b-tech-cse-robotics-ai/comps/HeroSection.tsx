import Image from "next/image";
import Link from "next/link";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

const HeroSection = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#BDCBCF_-1.04%,#BCD5E2_101.28%)] relative overflow-hidden">
      <div className="relative w-full xl:hidden pt-[120px]">
        <div className="relative w-full flex flex-col items-center">
          <Image
            src="/ai-ml.svg"
            width={920}
            height={494}
            alt="AI ML"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
          <Image
            src="/robotic-hand.png"
            width={537}
            height={652}
            alt="Robotic Hand"
            className="z-20 relative w-[220px] sm:w-full"
          />
        </div>
        <div className="bg-[#4987AB] w-full xl:hidden z-20 relative">
          <div className="max-w-[1564px] mx-auto px-5 py-2 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 sm:gap-4 text-center text-white text-base lg:text-xl">
              <span className="font-semibold">August 2026 intake now open</span>

              <span className="hidden sm:block w-2 h-2 rounded-full bg-white" />

              <span>Scholarships up to 100%</span>

              <span className="hidden sm:block w-2 h-2 rounded-full bg-white" />

              <Link
                href="#"
                className="underline font-light hover:opacity-80 transition"
              >
                Apply on the admissions portal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1564px] mx-auto w-full pt-10 xl:pt-44 flex flex-col-reverse xl:flex-row font-poppins z-20 relative px-5">
        <Image
          src="/ellipse.svg"
          width={639}
          height={639}
          alt="Ellipse"
          className="absolute -left-24 top-0 sm:left-[-154px] sm:top-[-75px] xl:-left-24 xl:top-0 rounded-full"
        />
        <Image
          src="/ai-ml.svg"
          width={920}
          height={494}
          alt="AI ML"
          className="absolute bottom-0 right-[5%] hidden xl:block"
        />
        <div className="w-full xl:w-1/2 z-20 relative xl:pl-12 2xl:pl-0">
          <p className="text-base font-bold">
            Engineer Intelligent Robots for an AI-Driven World
          </p>
          <h1
            className="
                      text-4xl
                      sm:text-5xl
                      xl:text-[55px]
                      2xl:text-[68px]
                      leading-[1.2]
                      xl:max-w-[600px]
                      2xl:max-w-[900px]
                      font-bold
                      pb-2.5
                      py-2.5
                      bg-[linear-gradient(89.96deg,_#001732_0.03%,_#004698_78.3%)]
                      bg-clip-text
                      text-transparent
                    "
          >
            B.Tech. CSE <br className="hidden sm:block" /> (Robotics &amp;
            Artificial Intelligence)
          </h1>
          <h2 className="text-lg sm:text-[22px] mb-1.5 xl:max-w-[480px]">
            with Academic Support of IBM & Powered by Microsoft Certifications
          </h2>
          <p className="text-sm xl:max-w-[510px] leading-5 text-justify sm:text-left">
            Graduate with expertise in robot design, computer vision, machine
            learning, and AI-powered autonomous systems, strengthened by
            IBM-backed industry certifications and Microsoft credentials.
          </p>
          <div className="space-y-3 space-x-2 leading-8 font-semibold text-sm mt-7">
            <NpfPopup
              formId={`31c1452015d32698095f833b3e7eb9c5`}
              btnClass={`bg-[#DE0000] text-white rounded-[5px] px-5 py-1 uppercase inline-block npfWidget-31c1452015d32698095f833b3e7eb9c5 w-full sm:w-fit`}
              btnText="Apply Now"
              showIcon={false}
            />
            <CommonLeadPopup
              buttonText="Download Prospectus"
              buttonClassName="bg-white text-black rounded-[5px] px-5 py-1 uppercase w-full sm:w-fit"
              redirectUrl="https://www.krmangalam.edu.in/pdfs/programme-brochure/btech-cse-new.pdf"
              form_name="Download Prospectus"
            />
            {/* <button className="bg-[#DE0000] text-white rounded-[5px] px-5 py-1 uppercase">
              Apply Now
            </button> */}
            {/* <button className="bg-white text-[#012959] rounded-[5px] px-5 py-1 uppercase">
              Download Prospectus
            </button> */}
          </div>
          <div className="flex flex-col md:flex-row mt-6 gap-5 md:gap-2.5 mb-10">
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#A2C6D2] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">56.6 LPA</h3>
              <h4 className="text-lg font-light leading-none">
                Highest Package
              </h4>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#B0C4CC] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">800+</h3>
              <h4 className="text-lg font-light leading-none">
                Campus Recruiters
              </h4>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center text-[#001732] bg-[#CCDBE3] pt-6 pb-10 rounded-[10px]">
              <h3 className="text-[40px] font-bold">100%</h3>
              <h4 className="text-lg font-light leading-none">Placement</h4>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 justify-center z-20 relative hidden xl:flex">
          <Image
            src="/robotic-hand.png"
            width={537}
            height={652}
            alt="Robotic Hand"
          />
        </div>
      </div>
      <div className="bg-[#4987AB] w-full hidden xl:block">
        <div className="max-w-[1564px] mx-auto px-5 py-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-4 text-center text-white text-base lg:text-xl">
            <span className="font-semibold">August 2026 intake now open</span>

            <span className="hidden sm:block w-2 h-2 rounded-full bg-white" />

            <span>Scholarships up to 100%</span>

            <span className="hidden sm:block w-2 h-2 rounded-full bg-white" />

            <Link
              href="#"
              className="underline font-light hover:opacity-80 transition"
            >
              Apply on the admissions portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

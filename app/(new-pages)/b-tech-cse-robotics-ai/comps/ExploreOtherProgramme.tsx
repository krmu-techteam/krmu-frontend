import Image from "next/image";
import Link from "next/link";

const ExploreOtherProgramme = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-7xl mx-auto w-full bg-[url(/demo/exploreprog.svg)] bg-center bg-no-repeat bg-cover flex flex-col lg:flex-row rounded-[10px] relative">
        <Image
          src="/demo/explore-prog-girl.png"
          width={432}
          height={727}
          alt=""
          className="absolute bottom-0 right-0 left-1/2 xl:left-[48%] -translate-x-1/2 lg:-translate-x-px"
        />
        <div className="w-full lg:w-1/2 text-white p-5 md:py-10 md:pl-14 md:pr-0">
          <h4 className="text-3xl sm:text-[40px] font-bold leading-tight text-[#00A1FF] mb-5 sm:mb-2">
            Explore <br className="hidden lg:block" /> Other Programmes
          </h4>
          <p>
            Discover other programmes that open doors to exciting career
            opportunities and future growth. Choose from a wide range of
            industry-oriented courses designed to help you build a successful
            future with confidence.
          </p>
          <div className="lg:max-w-[486px] my-4 space-y-4 text-sm sm:text-base">
            <div className="text-white px-5 py-2 rounded-[5px] border border-[#0161B0]">
              B.Tech. Computer Science and Engineering (CSE)
            </div>
            <div className="text-white px-5 py-2 rounded-[5px] border border-[#0161B0]">
              B.Tech. Computer Science and Engineering (AI & ML) with Academic
              Support of IBM & Powered by Microsoft Certifications
            </div>
            <div className="text-white px-5 py-2 rounded-[5px] border border-[#0161B0]">
              B.Tech. CSE (Full Stack Development)with Academic Support
              of ImaginXP
            </div>
            <div className="text-white px-5 py-2 rounded-[5px] border border-[#0161B0]">
              B.Tech. CSE (UX/UI)with Academic Support of ImaginXP
            </div>
          </div>
          <Link href="/programmes?school=soet" target="_blank" className="underline inline-block mt-2 sm:mt-4">
            Explore More
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-24 lg:mt-0">
          <Image
            src="/demo/explore-prog-bg-2.png"
            width={494}
            height={662}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherProgramme;

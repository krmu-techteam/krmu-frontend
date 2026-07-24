import Image from "next/image";
import Link from "next/link";

const ExploreOtherProgramme = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto w-full bg-[url(/demo/exploreprog.svg)] bg-center bg-no-repeat bg-cover flex rounded-[10px] relative">
      <Image src="/demo/explore-prog-girl.png" width={432} height={727} alt="" className="absolute bottom-0 left-[42%]" />
        <div className="w-1/2 text-white p-10">
          <h4 className="text-[40px] font-bold leading-tight text-[#00A1FF]">
            Explore <br />
            Other Programmes
          </h4>
          <p>
            Discover other programmes that open doors to exciting career
            opportunities and future growth. Choose from a wide range of
            industry-oriented courses designed to help you build a successful
            future with confidence.
          </p>
          <div className="max-w-[486px] my-4 space-y-4">
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
          <Link href="#" className="underline inline-block mt-4">Explore More</Link>
          <div></div>
        </div>
        <div className="w-1/2 flex justify-end">
        <Image src="/demo/explore-prog-bg-2.png" width={494} height={662} alt="" /></div>
      </div>
    </section>
  );
};

export default ExploreOtherProgramme;

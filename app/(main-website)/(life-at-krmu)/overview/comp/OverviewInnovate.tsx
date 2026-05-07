import Link from "next/link";
import OverviewUpdatedSlide from "./OverviewUpdatedSlide";
import { getOverviewEvents } from "@/lib/api/overviewslide";
import Image from "next/image";
const OverviewInnovate = async () => {
  const data = await getOverviewEvents();

  return (
    <section className="md:px-4 px-0 bg-slate-50/70">
      <div className="max-w-[1440px] mx-auto w-full shadow-2xl overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[30%] bg-gradient-to-br from-[#051630] to-[#071d3d] px-6 py-12 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white">
            <p className="mb-5 opacity-80 uppercase tracking-widest text-xs font-bold">Facilities That Foster Excellence</p>
            <h4 className="text-3xl md:text-5xl font-bold leading-tight">
              Innovate <br className="hidden md:block" />
              Engage <br className="hidden md:block" /> Succeed
            </h4>
          </div>

          <div className="lg:w-[70%] bg-gradient-to-r from-[#0060aa] to-[#0084e6] px-6 py-12 lg:py-16 text-white flex flex-col justify-between">
            <p className="text-lg md:text-2xl mb-8 leading-relaxed max-w-[800px] font-medium">
              Every day is an opportunity to explore, learn, and connect at
              KRMU, where the sprawling campus is a bustling hub of activities,
              events, and interactions that cultivate a sense of belonging and
              community.
            </p>
            <Link
              href="/krmu-campus-facilities"
              target="_blank" rel="noopener noreferrer"
              className="py-4 px-10 bg-white text-[#0060aa] rounded-[4px] text-base font-extrabold inline-block hover:bg-gray-100 transition-all shadow-md hover:-translate-y-1 w-fit"
            >
              Explore KRMU Facilities
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[30%] flex flex-col">
            <div className="bg-gradient-to-br from-[#0060aa] to-[#0076cc] px-6 py-12 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px] text-white flex-grow">
              <p className="mb-5 opacity-90 uppercase tracking-widest text-xs font-bold">What’s Happening at KRMU</p>
              <h4 className="text-3xl md:text-4xl font-bold leading-tight">
                Stay Updated <br /> with Campus <br /> Happenings
              </h4>
            </div>
            <div className="w-full text-center flex flex-col justify-center items-center p-8 bg-white border-y border-gray-100">
              <div className="max-w-[388px] group cursor-pointer">
                <Image
                  src="/life-at-krmu/insta.webp"
                  width={388}
                  height={90}
                  alt="Instagram feed"
                  className="rounded-sm mb-4 transition-transform duration-500 group-hover:scale-105"
                />
                <p className="text-sm text-gray-500 mb-5 font-bold uppercase tracking-wider">
                  @krmuniv on Instagram
                </p>
                <Link
                  href="https://www.instagram.com/krmuniv/"
                  target="_blank" rel="noopener noreferrer"
                  className="border-[3px] border-[#0060aa] py-2.5 px-10 rounded-full text-[#0060aa] font-extrabold inline-block hover:bg-[#0060aa] hover:text-white transition-all shadow-sm"
                >
                  Check Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] bg-gradient-to-br from-[#051630] to-[#0b264d] px-6 py-12 lg:p-12 text-white flex flex-col">
            <div className="flex-grow flex items-center">
              <OverviewUpdatedSlide data={data} />
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="/happenings/news-and-events"
                className="text-[#051630] bg-white py-4 px-12 rounded-[4px] font-extrabold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1"
                target="_blank" rel="noopener noreferrer"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewInnovate;

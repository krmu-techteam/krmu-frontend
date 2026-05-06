import Link from "next/link";

const OverviewYourInterest = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h4 className="text-3xl md:text-5xl lg:text-[64px] text-[#00a0e3] font-bold leading-tight mb-4">
            Your Interest <br className="hidden lg:block" /> Our Platform
          </h4>
          <p className="text-[#00a0e3] text-xl md:text-2xl font-medium mb-0">
            KRMU Clubs and Societies
          </p>
        </div>
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At K.R. Mangalam University (KRMU), student life goes beyond
            academics. Our dynamic clubs and societies create a vibrant space
            for students to explore their interests, develop leadership skills,
            and connect with like-minded peers. Whether you’re passionate about
            art, music, sports, technology, or social causes, there’s a club for
            everyone! These student-led initiatives provide hands-on learning,
            foster creativity, and encourage teamwork.
          </p>
          <Link
            href="/clubs-and-societies"
            className="text-sm md:text-base py-3 px-6 md:py-[11px] md:px-[23px] text-white font-semibold rounded-[4px] bg-[#051630] inline-block transition-all hover:bg-[#0a2342]"
            target="_blank" rel="noopener noreferrer"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};


export default OverviewYourInterest;

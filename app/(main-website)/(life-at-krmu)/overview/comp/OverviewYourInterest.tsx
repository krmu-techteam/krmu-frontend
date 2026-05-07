import Link from "next/link";

const OverviewYourInterest = () => {
  return (
    <div className="relative py-8 md:py-12 lg:py-16 bg-[#0060aa] text-white flex-grow flex flex-col justify-center h-full transition-all duration-500 overflow-hidden group hover:bg-[#005291]">
      <div className="relative z-10 w-full text-center lg:text-left px-6 md:px-12 lg:px-20">
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
          Your Interest Our Platform
        </h4>
        <p className="text-white/95 text-xl md:text-2xl font-medium mb-6">
          KRMU Clubs and Societies
        </p>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-[800px]">
          At K.R. Mangalam University (KRMU), student life goes beyond
          academics. Our dynamic clubs and societies create a vibrant space
          for students to explore their interests, develop leadership skills,
          and connect with like-minded peers. Whether you’re passionate about
          art, music, sports, technology, or social causes, there’s a club for
          everyone! These student-led initiatives provide hands-on learning,
          foster creativity, and encourage teamwork.
        </p>
        <div>
          <Link
            href="/clubs-and-societies"
            className="text-sm md:text-base py-3.5 px-10 text-[#0060aa] font-bold rounded-[4px] bg-white inline-block transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
            target="_blank" rel="noopener noreferrer"
          >
            Know More
          </Link>
        </div>
      </div>
      
      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 right-0 w-0 h-1 bg-white/30 transition-all duration-700 group-hover:w-full" />
    </div>
  );
};


export default OverviewYourInterest;

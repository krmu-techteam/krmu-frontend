import Link from "next/link";

const CareerDevelopmentTeamSection = () => {
  return (
    <section className="relative z-5 bg-[#001732]/50 py-12 sm:py-16 md:py-20 text-white min-h-[577px] flex flex-col justify-center">
      <div className="max-w-[1184px] w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <h2 className="heading-primary mb-6 sm:mb-8">
          Career Development Team
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-4 font-poppins text-white text-xs sm:text-sm md:text-[16px] leading-relaxed font-light max-w-5xl">
          <p>
            KRMU is a progressive University, progressing every day towards new
            avenues of pedagogy and success. We at KRMU believe in fostering and
            nurturing talent to meet the expectations of the corporate world
            fastidiously and embrace the ever-changing scenarios with ease and
            grace.
          </p>
          <p>
            We have always valued our intellectual capital, and believe in
            nurturing it through a perfect blend of modern and meticulous
            academic procedures with diligence for the overall development of
            the students' personality.
          </p>
          <p>
            The university lays special emphasis on inculcating values of
            corporate and employability skills required for complex
            decision-making, besides developing expertise on functional domains
            and enhancing business knowledge.
          </p>
          <p>
            The sole objective of the Career Development Center is to provide
            the appropriate career platform for the fledging talent to flourish,
            which helps the Corporate in achieving their Goals and Objectives
            and benefits the society at large.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/career-development-centre"
            target="_blank"
            className="inline-block bg-white text-[#001732] hover:bg-white/90 rounded-[10px] px-6 py-3 font-poppins font-semibold text-[16px] transition-all duration-300 shadow-md"
          >
            Career Development Center
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerDevelopmentTeamSection;

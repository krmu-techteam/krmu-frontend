import Link from "next/link";

const CDT = () => {
  return (
    <section className="bg-[url(/placements/corporate-resource-cell-team.webp)] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex px-5 sm:px-12">
        <div className="w-full sm:w-2/3 lg:w-1/3 p-10 md:p-[60px] bg-[#051630] text-white">
          <h4 className="text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-semibold mb-5 ">
            Career Development Team
          </h4>
          <p>
            KRMU is a progressive University, progressing every day towards new
            avenues of pedagogy and success. We at KRMU believe in fostering and
            nurturing talent to meet the expectations of the corporate world
            fastidiously and embrace the ever-changing scenarios with ease and
            grace.
          </p>
          <br />
          <p>
            We have always valued our intellectual capital, and believe in
            nurturing it through a perfect blend of modern and meticulous
            academic procedures with diligence for the overall development of
            the students’ personality.
          </p>
          <p className="mb-4">
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
          <Link href="/career-development-centre" target="_blank" rel="noopener noreferrer" className="bg-[#e31e24] text-sm text-white rounded-sm py-[11px] px-[23px] font-medium inline-block mt-5">Know More</Link>
        </div>
        <div className="w-full sm:w-1/3 lg:w-2/3"></div>
      </div>
    </section>
  );
};

export default CDT;

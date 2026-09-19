import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const RecruitersHero = () => {
  return (
    <section className="bg-[url(/placements/recruiters/rec-hero-bg.webp)] bg-cover bg-center bg-no-repeat px-5 xl:px-0 pt-28 xl:pt-40 pb-12">
      <div className="mx-auto w-full max-w-3xl text-center text-white">
        <Link
          href="/placement"
          className="inline-flex items-center gap-2 text-sm text-[#33] transition-transform duration-300 hover:translate-x-1"
        >
          <ArrowLeft size={16} strokeWidth={1.5} /> Back to Placement
        </Link>
        <h3 className="text-xs font-medium uppercase text-[#E7C268] sm:text-sm  md:text-base tracking-[4px]">
          For Recruiters
        </h3>

        <h1 className="mx-auto my-3 max-w-[850px] font-newsreader text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl md:leading-tight">
          Hire industry-ready talent from KRMU.
        </h1>

        <p className="mx-auto mt-5 max-w-[450px] text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          Comprehensive placement guidelines, schedules and policies for the
          current academic year. Review all requirements before portal access.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
          <Link
            href="/placement/registration"
            className="inline-flex min-h-12 w-full max-w-[220px] items-center justify-center bg-[#de0000] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#c80000] sm:max-w-[187px]"
          >
            Register here
          </Link>

          <Link
            href="https://www.krmangalam.edu.in/pdfs/placement-brochure.pdf"
            className="inline-flex min-h-12 w-full max-w-[220px] items-center justify-center bg-white px-2 py-3 text-lg font-medium text-black transition-colors hover:bg-gray-100 sm:max-w-[220px]"
            target="_blank"
          >
            Download brochure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecruitersHero;

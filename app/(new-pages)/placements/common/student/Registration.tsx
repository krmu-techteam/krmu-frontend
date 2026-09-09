import { Minus } from "lucide-react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Registration = () => {
  return (
    <section>
      <div className="container mx-auto w-full max-w-[1287px] border-b border-[#ccc] px-5 py-10 sm:py-12 md:py-14 lg:py-16 xl:px-0 xl:py-20">
        {/* Heading */}
        <h2
          className={`${newsreader.className} mb-8 text-4xl font-medium leading-[1.15] sm:text-5xl md:mb-10 md:text-[48px] lg:text-6xl lg:leading-[70px]`}
        >
          Registration details
        </h2>

        {/* Main Content */}
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
          {/* Left Column */}
          <div className="w-full lg:w-1/3">
            {/* Eligibility */}
            <div>
              <h4 className="text-sm font-medium uppercase leading-snug tracking-[0.18em] text-[#7A1F2B] sm:text-base">
                Eligibility
              </h4>

              <ul className="mt-5 font-medium">
                <li className="flex items-start gap-2 border-t border-[#ccc] py-5 text-sm leading-relaxed sm:text-base">
                  <Minus
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0"
                  />
                  <span>Final year students with zero active backlogs.</span>
                </li>

                <li className="flex items-start gap-2 border-t border-[#ccc] py-5 text-sm leading-relaxed sm:text-base">
                  <Minus
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0"
                  />
                  <span>Minimum CGPA of 6.5 across all semesters.</span>
                </li>

                <li className="flex items-start gap-2 border-y border-[#ccc] py-5 text-sm leading-relaxed sm:text-base">
                  <Minus
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0"
                  />
                  <span>Completed mandatory pre-placement training.</span>
                </li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className="mt-10 sm:mt-12">
              <h4 className="text-sm font-medium uppercase leading-snug tracking-[0.18em] text-[#7A1F2B] sm:text-base">
                Required documents
              </h4>

              <div className="mt-5 border-t border-[#ccc] pt-5">
                <p className="mb-4 text-sm leading-relaxed text-[#606060] sm:text-base">
                  Updated resume (PDF), semester marksheets, ID proof.
                </p>

                <label className="flex min-h-12 w-full cursor-pointer items-center justify-center rounded-none border border-[#ccc] bg-white px-4 py-3 text-sm font-medium transition hover:bg-[#fefcfa] sm:min-h-14 sm:text-base">
                  <span>Upload documents</span>
                  <input type="file" className="sr-only" accept=".pdf" />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3">
            <div className="w-full bg-[#fefcfa] p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12">
              <h4 className="mb-8 text-sm font-medium uppercase leading-snug tracking-[0.18em] text-[#7A1F2B] sm:mb-10 sm:text-base">
                Timeline & requirements
              </h4>

              <div className="text-[#606060]">
                {/* Timeline Item */}
                <div className="border-b border-[#ccc] pb-7 sm:pb-8 lg:pb-10">
                  <h3
                    className={`${newsreader.className} mb-2 mt-0 text-3xl font-medium text-black sm:text-4xl md:text-[40px]`}
                  >
                    May 1st
                  </h3>

                  <p className="text-sm sm:text-base">Portal opens</p>
                </div>

                {/* Timeline Item */}
                <div className="pt-7 sm:pt-8 lg:pt-10">
                  <h3
                    className={`${newsreader.className} mb-2 mt-0 text-3xl font-medium text-[#7A1F2B] sm:text-4xl md:text-[40px]`}
                  >
                    April 30th
                  </h3>

                  <p className="text-sm sm:text-base">Portal closes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

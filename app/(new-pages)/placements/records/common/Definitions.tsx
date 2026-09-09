import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DefinitionsData } from "../constant";

const Definitions = () => {
  return (
    <section className="px-5 xl:px-0 py-10 sm:py-14 md:py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <div className="max-w-3xl">
          <h3 className="text-4xl sm:text-5xl md:text-[55px] font-newsreader text-[#001836] leading-tight">
            Definitions
          </h3>

          <p className="mt-2 text-sm sm:text-base leading-6 text-[#12233F]">
            The exact terms used across this report, so every figure means one
            thing only.
          </p>
        </div>

        {/* Definitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-6 sm:gap-y-8 mt-8 md:mt-10">
          {DefinitionsData.slice(0, 3).map((definition) => (
            <div
              key={definition.title}
              className="w-full border-t border-black pt-5"
            >
              <h4 className="text-sm sm:text-base font-medium mb-2.5 text-[#001836]">
                {definition.title}
              </h4>

              <p className="text-xs sm:text-sm leading-relaxed text-[#12233F]">
                {definition.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/placements/definitions"
            className="
              inline-flex items-center justify-center gap-2
              border border-[#ccc]
              px-5 sm:px-6
              py-2.5 sm:py-3
              text-xs sm:text-sm
              text-[#12233F]
              hover:bg-[#12233F]
              hover:text-white
              transition-colors
            "
          >
            View all definitions
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Definitions;

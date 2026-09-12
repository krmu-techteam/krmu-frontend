"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import { DefinitionsData } from "../constant";

const Definitions = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleDefinitions = showAll
    ? DefinitionsData
    : DefinitionsData.slice(0, 6);

  return (
    <section className="px-5 py-10 sm:py-14 md:py-20 xl:px-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <h3 className="font-newsreader text-4xl leading-tight text-[#001836] sm:text-5xl md:text-[55px]">
            Definitions
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#12233F] sm:text-base">
            The exact terms used across this report, so every figure means one
            thing only.
          </p>
        </div>

        {/* Definitions */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:mt-10 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3 lg:gap-x-10">
          {visibleDefinitions.map((definition) => (
            <div
              key={definition.title}
              className="w-full border-t border-black pt-5"
            >
              <h4 className="mb-2.5 text-sm font-medium text-[#001836] sm:text-base">
                {definition.title}
              </h4>

              <p className="text-xs leading-relaxed text-[#12233F] sm:text-sm">
                {definition.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All */}
        {DefinitionsData.length > 6 && (
          <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-[#ccc]
                px-5
                py-2.5
                text-xs
                text-[#12233F]
                transition-colors
                hover:bg-[#12233F]
                hover:text-white
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              {showAll ? "Show less" : "View all definitions"}

              {showAll ? <ArrowUp size={15} /> : <ArrowRight size={15} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Definitions;

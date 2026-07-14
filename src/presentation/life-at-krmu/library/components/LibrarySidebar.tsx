"use client";

import { ChevronUp } from "lucide-react";
import { LIBRARY_SECTIONS } from "@/features/life-at-krmu/library/library.library-sections";

type Props = {
  activeSection: number;
  setActiveSection: (index: number) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const LibrarySidebar = ({
  activeSection,
  setActiveSection,
  open,
  setOpen,
}: Props) => {
  return (
    <aside className="md:w-1/4 font-poppins md:mx-8 pt-[116px] px-4 pb-[60px] bg-[url(/library/gradient.webp)] bg-cover bg-center">
      <div className="border-b border-white/30">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center cursor-pointer py-3 text-white font-semibold"
        >
          <span>Overview</span>

          <ChevronUp
            className={`transition duration-300 ${open ? "" : "rotate-180"}`}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            open ? "max-h-[1500px]" : "max-h-0"
          }`}
        >
          {LIBRARY_SECTIONS.filter((s) => s.group === "overview").map(
            (section, index) => (
              <div
                key={section.title}
                onClick={() => setActiveSection(index)}
                className={`cursor-pointer py-2 ${
                  activeSection === index ? "text-yellow-300" : "text-white"
                }`}
              >
                {section.title}
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mt-6">
        {LIBRARY_SECTIONS.filter((s) => s.group === "resource").map(
          (section) => {
            const index = LIBRARY_SECTIONS.findIndex(
              (item) => item.title === section.title,
            );

            return (
              <div
                key={section.title}
                onClick={() => setActiveSection(index)}
                className={`cursor-pointer py-2 font-semibold ${
                  activeSection === index ? "text-yellow-300" : "text-white"
                }`}
              >
                {section.title}
              </div>
            );
          },
        )}
      </div>
    </aside>
  );
};

export default LibrarySidebar;

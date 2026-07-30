"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResearchCenterSection from "../../sections/ResearchCenterSection";
import { sustainTriggers, accordionVariants } from "./data";

interface SdgAccordionListProps {
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
}

const SdgAccordionList: React.FC<SdgAccordionListProps> = ({
  openAccordion,
  onToggleAccordion,
}) => {
  return (
    <div className="space-y-4">
      {sustainTriggers.map((trigger) => {
        const isOpen = openAccordion === trigger.id;
        return (
          <div
            key={trigger.id}
            id={trigger.id}
            className="w-full rounded-[4px] overflow-hidden scroll-mt-24"
          >
            {/* Accordion Header Bar */}
            <button
              onClick={() => onToggleAccordion(trigger.id)}
              className={`w-full h-[72px] px-6 flex items-center justify-between text-left font-normal text-lg sm:text-[22px] text-white cursor-pointer rounded-[4px] border transition-all duration-300 ${
                isOpen
                  ? "border-[#666666] bg-[#21212199]"
                  : "border-[#444444] bg-[#21212199] hover:bg-[#212121]/90 hover:border-[#777777]"
              }`}
            >
              <span className="tracking-wide">{trigger.label}</span>
              <div className="p-1.5 rounded-full bg-white/10 text-white shrink-0 ml-4">
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Accordion Content Panel (Silky-Smooth Framer Motion Height Transition) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={accordionVariants}
                  className="overflow-hidden"
                >
                  <div className="py-6 sm:py-8 bg-transparent">
                    {trigger.id === "sustain-panel-1" ? (
                      /* Research Center on Sustainability Section */
                      <ResearchCenterSection />
                    ) : (
                      /* Other 16 Sustainability Categories Content Area */
                      <div className="py-8 px-4 text-center">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {trigger.label}
                        </h3>
                        <p className="text-gray-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
                          Detailed reports, institutional metrics, and annual
                          progress updates for{" "}
                          <span className="text-[#E7C268] font-medium">
                            {trigger.label}
                          </span>{" "}
                          at K.R. Mangalam University are available below.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default SdgAccordionList;

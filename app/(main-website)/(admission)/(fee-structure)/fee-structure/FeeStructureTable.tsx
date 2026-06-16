"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeeStructureTab } from "@/lib/types/feestructure";

type Props = {
  feeStructTab: FeeStructureTab[];
};

const FeeStructureTable = ({ feeStructTab }: Props) => {
  return (
    <div className="py-8 md:py-16 max-w-[1530px] mx-auto w-full px-6 md:px-11 xl:px-16">
      <Tabs
        defaultValue={feeStructTab[0]?.id?.toString()}
        className="mx-auto w-full"
      >
        {/* ------------------ MODERN SEGMENTED TABS ------------------ */}
        <div className="flex justify-center mb-10 md:mb-16">
          <TabsList className="h-auto flex bg-[#061623] p-1 w-full max-w-2xl rounded-full border border-gray-500 shadow-sm gap-1">
            {feeStructTab.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id.toString()}
                className="flex-1 font-poppins cursor-pointer px-1.5 sm:px-3 py-3 text-[11px] xs:text-[12px] sm:text-base font-semibold transition-all duration-300
                           data-[state=active]:bg-white data-[state=active]:text-[#061623] 
                           text-white/80 rounded-full shadow-none leading-tight"
              >
                {tab.tab_heading}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* ------------------ DYNAMIC TAB CONTENT ------------------ */}
        {feeStructTab.map((tab) => {
          return (
            <TabsContent
              key={tab.id}
              value={tab.id.toString()}
              className="w-full mx-auto outline-none"
            >
              <FacultySection options={tab.fee_structure_acc || []} />
              {tab.tab_heading === "Fee Structure for Indian Students" && (
                <div>
                  <p className="text-right text-sm mr-2 mt-4 text-muted-foreground font-poppins">
                    ** Subject to Approval
                  </p>
                  <p className="text-right text-sm mr-2 mt-1 text-muted-foreground font-poppins">
                    The programme fee payable in subsequent years may increase
                    up to 10% per annum
                  </p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default FeeStructureTable;

const FacultySection = ({ options }: { options: any[] }) => {
  const [activeSchoolId, setActiveSchoolId] = useState(
    options[0]?.id?.toString() || "",
  );

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (val: string) => {
    setActiveSchoolId(val);
    if (containerRef.current) {
      const yOffset = -140; // Offset to clear the sticky header
      const y =
        containerRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Sync state if options change (e.g. when category tab changes)
  useEffect(() => {
    if (
      options.length > 0 &&
      (!activeSchoolId ||
        !options.find((opt) => opt.id.toString() === activeSchoolId))
    ) {
      setActiveSchoolId(options[0].id.toString());
    }
  }, [options, activeSchoolId]);

  const activeSchool = options.find((opt) => opt.id.toString() === activeSchoolId) || options[0];

  return (
    <div className="w-full" ref={containerRef}>
      {/* 1. DESKTOP VIEW (Side-by-side tabs) - Visible on lg and above */}
      <div className="hidden lg:flex gap-8 items-start w-full">
        {/* Left Column: Vertical button list */}
        <div className="w-[35%] sticky top-[150px] flex flex-col gap-2 z-10">
          {options.map((acc) => {
            const isActive = acc.id.toString() === activeSchoolId;
            return (
              <button
                key={acc.id}
                onClick={() => handleTabChange(acc.id.toString())}
                className={`w-full text-left font-poppins py-3 px-5 rounded-[4px] border transition-all duration-300 text-sm font-semibold cursor-pointer whitespace-normal h-auto leading-tight ${
                  isActive
                    ? "bg-[#0055A4] border-[#0055A4] text-white shadow-[0_4px_15px_rgba(0,85,164,0.2)]"
                    : "bg-[#132431]/60 border-gray-600/50 text-white/80 hover:bg-[#132431] hover:text-white"
                }`}
              >
                {acc.panel_heading}
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected school content pane */}
        <div className="w-[65%] bg-[#132431]/60 rounded-[6px] border border-gray-600/40 p-8 shadow-xl min-h-[400px]">
          {activeSchool ? (
            <div className="prose prose-invert max-w-none font-poppins text-white/95 leading-relaxed">
              <h3 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-white/10 leading-tight">
                {activeSchool.panel_heading}
              </h3>
              
              <div
                className="overflow-x-auto modern-fee-table scrollbar-thin scrollbar-thumb-gray-200"
                dangerouslySetInnerHTML={{ __html: activeSchool.panel_content }}
              />
            </div>
          ) : (
            <div className="text-white/50 text-center py-12">
              Select a school/faculty to view fee structure.
            </div>
          )}
        </div>
      </div>

      {/* 2. MOBILE & TABLET LAYOUT (Accordion) - Visible below lg */}
      <div className="lg:hidden">
        <Accordion
          type="single"
          collapsible
          className="w-full kree-accordion"
        >
          {options.map((acc) => (
            <AccordionItem
              key={acc.id}
              value={`fee-${acc.id}`}
              className="mb-2.5"
            >
              <AccordionTrigger className="bg-[#132431] rounded-[3px] border border-gray-500 font-poppins py-[15px] px-5 text-white text-base cursor-pointer hover:no-underline">
                {acc.panel_heading}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 font-poppins text-white text-balance py-5 md:p-5">
                <div
                  className="overflow-x-auto modern-fee-table"
                  dangerouslySetInnerHTML={{ __html: acc.panel_content }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Local custom styles to theme the table inside dark content panels */}
      <style dangerouslySetInnerHTML={{ __html: `
        .modern-fee-table table {
          background-color: #1a2c3d !important;
          border-collapse: collapse !important;
          width: 100% !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          margin-bottom: 0 !important;
        }
        .modern-fee-table table thead tr th,
        .modern-fee-table table tr:first-child td {
          background-color: #0055A4 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          font-weight: 600 !important;
          padding: 12px 15px !important;
          font-family: var(--font-poppins), sans-serif !important;
        }
        .modern-fee-table table tbody tr td,
        .modern-fee-table table tr:not(:first-child) td {
          background-color: transparent !important;
          color: rgba(255, 255, 255, 0.9) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 10px 14px !important;
          font-family: var(--font-poppins), sans-serif !important;
        }
        .modern-fee-table table tbody tr:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.02) !important;
        }
        .modern-fee-table table tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        .modern-fee-table table tr td:last-child {
          color: #E7C268 !important; /* Brand Gold */
          font-weight: 600 !important;
        }
        .modern-fee-table table td small,
        .modern-fee-table table td .sub-text {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}} />
    </div>
  );
};

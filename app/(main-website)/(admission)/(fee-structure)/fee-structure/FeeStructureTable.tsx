"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeeStructureTab } from "@/lib/types/feestructure";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
// import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

type Props = {
  feeStructTab: FeeStructureTab[];
};

const FeeStructureTable = ({ feeStructTab }: Props) => {
  return (
    <div className="py-8 md:py-16 max-w-[1664px] mx-auto w-full px-3 sm:px-6">
      <Tabs
        defaultValue={feeStructTab[0]?.id?.toString()}
        className="mx-auto w-full"
      >
        {/* ------------------ MODERN SEGMENTED TABS ------------------ */}
        <div className="flex justify-center mb-10 md:mb-16">
          <TabsList className="h-auto flex bg-gray-100 p-1 w-full max-w-2xl rounded-sm border border-gray-200 shadow-sm gap-1">
            {feeStructTab.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id.toString()}
                className="flex-1 cursor-pointer px-1.5 sm:px-3 py-3 text-[11px] xs:text-[12px] sm:text-base font-semibold transition-all duration-300
                           data-[state=active]:bg-[#0062aa] data-[state=active]:text-white 
                           text-gray-500 rounded-sm shadow-none leading-tight"
              >
                {tab.tab_heading}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* ------------------ DYNAMIC TAB CONTENT ------------------ */}
        {feeStructTab.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id.toString()}
            className="w-full max-w-[1600px] mx-auto outline-none"
          >
            <FacultySection options={tab.fee_structure_acc || []} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeeStructureTable;

const FacultySection = ({ options }: { options: any[] }) => {
  const [activeSchoolId, setActiveSchoolId] = useState(options[0]?.id?.toString() || "");

  // Sync state if options change (e.g. when category tab changes)
  useEffect(() => {
    if (options.length > 0 && (!activeSchoolId || !options.find(opt => opt.id.toString() === activeSchoolId))) {
      setActiveSchoolId(options[0].id.toString());
    }
  }, [options, activeSchoolId]);

  return (
    <div className="w-full">
      {/* Custom Premium Mobile Dropdown for Schools/Faculties */}
      <div className="lg:hidden mb-8">
        <label className="block text-[11px] font-bold text-[#0062aa]/60 mb-2 uppercase tracking-[2px] ml-1">
          Select School/Faculty
        </label>
        <MobileFacultyDropdown
          options={options}
          value={activeSchoolId}
          onChange={setActiveSchoolId}
        />
      </div>

      <Tabs value={activeSchoolId} onValueChange={setActiveSchoolId} className="w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Sidebar Navigation: School/Faculty List - Sticky on Desktop, Hidden on Mobile */}
          <TabsList className="hidden lg:flex flex-col h-auto w-full lg:w-[450px] bg-white border border-gray-200 rounded-none p-0 lg:sticky lg:top-32 shadow-sm z-10 items-stretch">
            {options.map((acc) => (
              <TabsTrigger
                key={acc.id}
                value={acc.id.toString()}
                className="w-full justify-start text-left px-6 py-4 border-b border-gray-100 last:border-b-0 rounded-none
                           data-[state=active]:bg-[#0062aa] data-[state=active]:text-white text-[#444] font-semibold text-[16px] 
                           relative transition-all duration-300 hover:bg-gray-50 data-[state=active]:hover:bg-[#0062aa] group 
                           leading-tight"
              >
                <span className="flex-grow pr-4">{acc.panel_heading}</span>
                {/* Indicative Arrow for Active Faculty */}
                <div className="opacity-0 group-data-[state=active]:opacity-100 absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent 
                              border-l-[12px] border-l-[#0062aa] transition-opacity duration-300 hidden lg:block" />
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Main Content: Fee Tables */}
          <div className="flex-grow w-full min-w-0 bg-white p-4 md:p-6 border border-gray-100 shadow-sm rounded-sm">
            {options.map((acc) => (
              <TabsContent
                key={acc.id}
                value={acc.id.toString()}
                className="mt-0 animate-in fade-in duration-500"
              >
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-3xl font-bold text-[#0062aa] mb-2 leading-tight">
                    {acc.panel_heading}
                  </h3>
                  <div className="h-1 w-16 bg-[#0062aa] rounded-full" />
                </div>

                <div
                  className="overflow-x-auto modern-fee-table scrollbar-thin scrollbar-thumb-gray-200"
                  dangerouslySetInnerHTML={{ __html: acc.panel_content }}
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

const MobileFacultyDropdown = ({
  options,
  value,
  onChange,
}: {
  options: any[];
  value: string;
  onChange: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((opt) => opt.id.toString() === value);

  const handleSelect = (option: any) => {
    onChange(option.id.toString());
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setIsOpen(false);
    if (isOpen) {
      window.addEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-14 pl-5 pr-5 bg-white border-2 border-[#0062aa] rounded-sm text-[#0062aa] font-bold text-left flex items-center shadow-sm group"
      >
        <span className="truncate flex-1 mr-4">{selected?.panel_heading}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border-2 border-gray-100 rounded-none z-[60]  animate-in fade-in zoom-in duration-200">
          <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`px-5 py-3.5 text-sm font-semibold transition-colors cursor-pointer
                  ${selected?.id === option.id ? "bg-[#0062aa] text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {option.panel_heading}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


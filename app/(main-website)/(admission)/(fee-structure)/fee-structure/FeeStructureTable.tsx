import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FeeStructureTab } from "@/lib/types/feestructure";
// import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

type Props = {
  feeStructTab: FeeStructureTab[];
};

const FeeStructureTable = ({ feeStructTab }: Props) => {
  return (
    <div className="py-10 max-w-[1664px] mx-auto w-full px-4">
      <Tabs
        defaultValue={feeStructTab[0]?.id?.toString()}
        className="mx-auto w-full"
      >
        {/* ------------------ DYNAMIC TAB BUTTONS ------------------ */}
        <div className="flex justify-center mb-12">
          <TabsList className="h-16 inline-flex bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-md border border-gray-200/50 shadow-inner w-full max-w-3xl gap-2">
            {feeStructTab.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id.toString()}
                className="flex-1 cursor-pointer px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-all duration-300
                           data-[state=active]:bg-[#0062aa] data-[state=active]:text-white data-[state=active]:shadow-lg
                           text-gray-500 hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
              >
                {tab.tab_heading}
              </TabsTrigger>
            ))}
          {/* <Link
            href="https://www.krmangalam.edu.in/pdfs/Fee-Structure-2025-26.pdf"
            className="bg-[#898989] sm:leading-[3] inline-block w-full text-center text-sm sm:text-2xl p-5 sm:py-3.5 sm:px-[55px] rounded-none data-[state=active]:bg-[#051630] data-[state=active]:text-white
             text-black  font-semibold"
            target="_blank" rel="noopener noreferrer"
          >
            Download Fee Structure
          </Link> */}
{/* 
          <CommonLeadPopup
            buttonText={"Download Fee Structure"}
            buttonClassName={`bg-[#898989] sm:leading-[3] inline-block w-full text-center text-sm sm:text-2xl p-5 sm:py-3.5 sm:px-[55px] rounded-none data-[state=active]:bg-[#051630] data-[state=active]:text-white
             text-black  font-semibold`}
            redirectUrl="https://www.krmangalam.edu.in/pdfs/Fee-Structure-2025-26.pdf"
            form_name="Download Fee Structure"
          /> */}
          </TabsList>
        </div>

        {/* ------------------ DYNAMIC TAB CONTENT ------------------ */}
        {feeStructTab.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id.toString()}
            className="w-full max-w-[1600px] mx-auto"
          >
            <Tabs defaultValue={tab.fee_structure_acc[0]?.id.toString()} className="w-full">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Sidebar Navigation: School/Faculty List */}
                <TabsList className="flex flex-col h-auto w-full lg:w-[500px] bg-white border border-gray-200 rounded-none p-0 sticky top-24 shadow-sm">
                  {tab.fee_structure_acc?.map((acc) => (
                    <TabsTrigger
                      key={acc.id}
                      value={acc.id.toString()}
                      className="w-full justify-start text-left px-6 py-3 border-b border-gray-100 last:border-b-0 rounded-none
                                 data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white text-[#444] font-semibold text-[14px] sm:text-[16px] 
                                 relative transition-all duration-300 hover:bg-gray-50 data-[state=active]:hover:bg-[#0a41a1] group 
                                 leading-tight whitespace-normal h-auto min-h-[40px]"
                    >
                      <span className="flex-grow pr-4 break-words">{acc.panel_heading}</span>
                      {/* Indicative Arrow for Active Faculty */}
                      <div className="opacity-0 group-data-[state=active]:opacity-100 absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 
                                    border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent 
                                    border-l-[12px] border-l-[#0a41a1] transition-opacity duration-300 hidden lg:block" />
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Main Content: Fee Tables */}
                <div className="flex-grow w-full min-w-0 bg-white p-4 md:p-8 border border-gray-100 shadow-sm rounded-sm">
                  {tab.fee_structure_acc?.map((acc) => (
                    <TabsContent
                      key={acc.id}
                      value={acc.id.toString()}
                      className="mt-0 animate-in fade-in duration-500"
                    >
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0062aa] mb-2">
                          {acc.panel_heading}
                        </h3>
                        <div className="h-1 w-20 bg-[#0062aa] rounded-full" />
                      </div>
                      
                      <div
                        className="overflow-x-auto feestructtable scrollbar-thin scrollbar-thumb-gray-200"
                        dangerouslySetInnerHTML={{ __html: acc.panel_content }}
                      />
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeeStructureTable;

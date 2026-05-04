import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeeStructureTab } from "@/lib/types/feestructure";
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
        {/* ------------------ DYNAMIC TAB BUTTONS ------------------ */}
        <div className="flex justify-center mb-10 md:mb-16">
          <TabsList className="h-auto flex bg-gray-100/80 backdrop-blur-sm p-1 rounded-md border border-gray-200/50 shadow-inner w-full max-w-3xl gap-1 overflow-hidden">
            {feeStructTab.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id.toString()}
                className="flex-1 cursor-pointer px-2 sm:px-12 py-3 sm:py-4 text-[11px] xs:text-[13px] sm:text-lg font-medium rounded-md transition-all duration-300
                           data-[state=active]:bg-[#0062aa] data-[state=active]:text-white data-[state=active]:shadow-md
                           text-gray-500 hover:text-gray-700 data-[state=inactive]:hover:bg-white/50 leading-tight"
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
            className="w-full max-w-[1600px] mx-auto"
          >
            <Tabs defaultValue={tab.fee_structure_acc[0]?.id.toString()} className="w-full">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Sidebar Navigation: School/Faculty List - Sticky on Desktop */}
                <TabsList className="flex flex-row lg:flex-col h-auto w-full lg:w-[450px] bg-white border border-gray-200 rounded-none p-0 lg:sticky lg:top-32 shadow-sm overflow-x-auto lg:overflow-visible scrollbar-hide z-10">
                  {tab.fee_structure_acc?.map((acc) => (
                    <TabsTrigger
                      key={acc.id}
                      value={acc.id.toString()}
                      className="flex-shrink-0 w-auto lg:w-full justify-start text-left px-5 lg:px-6 py-3 border-r lg:border-r-0 lg:border-b border-gray-100 last:border-r-0 lg:last:border-b-0 rounded-none
                                 data-[state=active]:bg-[#0062aa] data-[state=active]:text-white text-[#444] font-semibold text-[14px] sm:text-[16px] 
                                 relative transition-all duration-300 hover:bg-gray-50 data-[state=active]:hover:bg-[#0062aa] group 
                                 leading-tight whitespace-nowrap lg:whitespace-normal h-auto min-h-[44px] lg:min-h-[40px]"
                    >
                      <span className="flex-grow pr-2 lg:pr-4">{acc.panel_heading}</span>
                      {/* Indicative Arrow for Active Faculty - Desktop Only */}
                      <div className="opacity-0 group-data-[state=active]:opacity-100 absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 
                                    border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent 
                                    border-l-[12px] border-l-[#0062aa] transition-opacity duration-300 hidden lg:block" />
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Main Content: Fee Tables */}
                <div className="flex-grow w-full min-w-0 bg-white p-4 md:p-6 border border-gray-100 shadow-sm rounded-sm">
                  {tab.fee_structure_acc?.map((acc) => (
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeeStructureTable;

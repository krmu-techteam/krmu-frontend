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
        <TabsList className="mb-10 sm:h-[102px] mx-auto fee_struct_tab_container">
          {feeStructTab.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id.toString()}
              className="bg-[#898989] leading-[1] sm:leading-[3] text-sm sm:text-2xl p-5 sm:py-3.5 xl:px-[55px] rounded-none 
                         data-[state=active]:bg-[#051630] data-[state=active]:text-white 
                         font-semibold mx-1 w-full"
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

        {/* ------------------ DYNAMIC TAB CONTENT ------------------ */}
        {feeStructTab.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id.toString()}
            className="w-full max-w-[1600px] mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {tab.fee_structure_acc?.map((acc) => (
                <AccordionItem
                  key={acc.id}
                  value={`item-${acc.id}`}
                  className="w-full"
                >
                  <AccordionTrigger
                    className="w-full bg-[#051630] py-[15px] text-base hover:no-underline cursor-pointer
                                              px-5 text-white mb-2.5 feeaccpanel"
                  >
                    {acc.panel_heading}
                  </AccordionTrigger>

                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <div
                      className="md:p-10 overflow-x-auto feestructtable"
                      dangerouslySetInnerHTML={{ __html: acc.panel_content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeeStructureTable;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { TOCFAQ } from "@/lib/types/school-programme";
import { ButtonType } from "@/lib/types/common";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";

type Props = {
  tocfaqs: TOCFAQ[];
  tocbtn?: ButtonType;
};

const TableOfContentTab = ({ tocfaqs, tocbtn }: Props) => {
  return (
    <Tabs
      defaultValue={tocfaqs?.[0]?.tocpoint.toLowerCase() ?? ""}
      className="flex flex-col w-full"
    >
      {/* Tab bar header layout: Full width edge-to-edge on mobile/tablet, contained on desktop */}
      <div className="-mx-4 md:-mx-8 lg:mx-0 flex flex-row justify-between items-center bg-[#071321] border-y lg:border border-white/5 rounded-none lg:rounded-[4px] px-4 md:px-8 lg:px-3 py-2 md:py-3 mb-6 md:mb-8 gap-4">
        <TabsList className="flex flex-row overflow-x-auto h-auto bg-transparent justify-start no-scrollbar rounded-none p-0 gap-4 sm:gap-6 md:gap-10 w-full lg:w-auto">
          {tocfaqs.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.tocpoint.toLowerCase()}
              className="relative text-sm md:text-base font-poppins font-medium cursor-pointer px-1 sm:px-2 md:px-3 py-2.5 rounded-none
                 text-white/60 
                 data-[state=active]:text-white
                 data-[state=active]:bg-transparent
                 data-[state=active]:shadow-none
                 after:absolute after:bottom-[6px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300
                 data-[state=active]:after:w-full transition-colors duration-200"
            >
              {section.tocpoint}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Action Button (Desktop only on right of tabs) */}
        {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
          <div className="hidden lg:flex shrink-0">
            <Button
              href={tocbtn?.buttonlink || "#"}
              target="_blank"
              variant="primary"
              icon={ArrowUpRight}
              iconPosition="right"
              className={`!bg-[#CB000D] hover:!bg-[#CB000D]/90 text-white font-bold !text-xs uppercase tracking-wider !h-auto !py-2.5 !px-6 transition-all duration-300 font-poppins ${tocbtn?.buttonclass || ""}`}
            >
              APPLY NOW
            </Button>
          </div>
        )}
      </div>

      {/* Tab content: Full Width Section */}
      <div className="w-full">
        {tocfaqs.map((section) => (
          <TabsContent
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="mt-0"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full cursor-pointer space-y-4"
              defaultValue={`item-${section.faq[0]?.id ?? 1}`}
            >
              {section.faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="border border-[#0055A4]  px-6 py-4 rounded-sm transition-all duration-300 shadow-md group last:border-b"
                >
                  <AccordionPrimitive.Header className="flex w-full">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-start gap-4 text-left py-1 text-white hover:no-underline transition-all duration-200 group focus-visible:outline-none">
                      {/* Left side: Plain Arrow Indicator */}
                      <ArrowRight className="h-4.5 w-4.5 text-white shrink-0 mt-1 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                      
                      {/* Question Text */}
                      <span className="text-[15px] md:text-[17px] font-poppins font-medium text-white tracking-tight leading-tight block">
                        {item.ques}
                      </span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-white/80 leading-relaxed pl-8 pb-1 pt-3 text-sm md:text-base font-poppins [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_li]:mb-1">
                    <div dangerouslySetInnerHTML={{ __html: item.ans }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default TableOfContentTab;



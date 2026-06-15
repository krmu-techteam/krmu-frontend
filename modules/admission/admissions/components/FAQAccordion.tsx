"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { Adm2FAQ, adm2btn } from "@/lib/types/admission2";
import FAQAccordionItem from "./FAQAccordionItem";

type Props = {
  tocfaqs: Adm2FAQ[];
  tocbtn?: adm2btn;
};
const FAQAccordion = ({ tocfaqs }: Props) => {
  return (
    <Tabs
      defaultValue={tocfaqs?.[0]?.tocpoint.toLowerCase() ?? ""}
      className="flex flex-col w-full"
    >
      {/* Tab bar header layout: Tabs + CTA Button in a dark card container */}
      <div className="flex flex-row justify-between items-center bg-[#071321] border border-white/5 rounded-sm p-2 md:p-3 mb-8 w-full gap-4">
        <TabsList className="flex flex-row overflow-x-auto h-auto bg-transparent justify-start no-scrollbar rounded-none p-0 gap-6 md:gap-10">
          {tocfaqs.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.tocpoint.toLowerCase()}
              className="relative text-sm md:text-base font-poppins font-medium cursor-pointer px-3 py-2.5 rounded-none
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
                <FAQAccordionItem key={item.id} item={item} />
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default FAQAccordion;

import React from "react";
import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import { FAQ } from "@/features/programs";

interface Props {
  item: FAQ;
}

const FAQAccordionItem = ({ item }: Props) => {
  return (
    <AccordionItem
      value={`item-${item.id}`}
      className="border border-[#0055A4] p-3 md:px-6 md:py-4 rounded-sm transition-all duration-300 group last:border-b"
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
  );
};

export default FAQAccordionItem;

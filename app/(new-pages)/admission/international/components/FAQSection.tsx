"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "../constant";

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="bg-[#F5F2EC] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <h2 className="mb-10 text-center text-4xl font-bold text-[#071C38] md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {visibleFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-[#E3DED6] bg-white"
            >
              <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-[#071C38] hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="px-5 pb-5 pt-0 text-sm leading-7 text-[#555] md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {faqs.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-md bg-[#0B2243] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#12335d]"
            >
              {showAll ? "Less" : "More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}